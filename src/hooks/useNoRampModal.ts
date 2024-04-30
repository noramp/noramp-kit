import { useCallback, useEffect, useRef, useState } from 'react';
import { NoRampConfig } from '../types';
import { loadStripe } from '@stripe/stripe-js';

export const useNoRampModal = (config: NoRampConfig) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const frameIdRef = useRef<string>('');

  const [isOpen, setIsOpen] = useState(false);

  const eventHandler = useCallback(
    (event: MessageEvent<any>) => {
      const { onEvent, onSuccess, onFailure, onClose } = config;

      const type = event.data?.detail?.type;
      const status = event.data?.detail?.data?.status;

      switch (event.data?.event) {
        case 'noramp:close':
          close();
          onClose?.(event.data?.payload);
          break;
        case 'noramp:failure':
          onFailure?.(event.data?.payload);
          break;
        case 'noramp:event':
          onEvent?.(event.data?.payload);
          break;
        // case 'noramp:success':
        //   onSuccess?.(event.data?.payload);
        //   break;

        case 'noramp:onPayment':
          if (type === 'finished' && status === 'paid') {
            onSuccess?.(event.data?.detail);
          }
          break;
      }
    },
    [config]
  );

  useEffect(() => {
    window.addEventListener('message', eventHandler, false);

    async function applePay() {
      const frame = iframeRef.current;

      if (!frame) {
        return;
      }

      const stripe = await loadStripe(
        'pk_test_51Kvq6SIkFYA0Bt9COhStV61cQKyfUE8QoJyTSnDi2s0a6OsKiMLTqN0Cm8q1kjqIXzMpB8ZWF60vWIQFIjT3JWWm00IpaUbajk'
      );
      if (!stripe) {
        return;
      }

      let paymentResponse: any;

      const paymentRequest = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'NoRamp',
          amount: 0,
          pending: true,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      window.addEventListener('message', (event) => {
        if (event.data.type) {
          console.log('[kit] message event type: ', event.data.type);
        }
        if (event.data.type == 'letsGo') {
          (async () => {
            const result = await paymentRequest.canMakePayment();
            console.log('[kit] result: ', result);
            if (result && result.applePay) {
              frame.contentWindow?.postMessage(
                {
                  type: 'canMakePayment',
                },
                '*'
              );

              // paymentRequest.update({
              //   total: {
              //     label: 'NoRamp',
              //     amount: event.data.amount,
              //     pending: false,
              //   },
              // });
            }
          })();
        }

        if (event.data.type == 'requestPayment') {
          paymentRequest.show();
        }

        if (event.data.type == 'completePaymentRequest') {
          paymentResponse.complete(event.data.status);
        }
      });

      paymentRequest.on('paymentmethod', async (event) => {
        console.log(
          '[kit] Got a Payment Method: ',
          event.paymentMethod.id,
          frame.contentWindow
        );
        paymentResponse = event;

        frame.contentWindow?.postMessage(
          {
            messageType: 'paymentMethod',
            paymentMethod: event.paymentMethod.id,
          },
          '*'
        );
      });
    }

    applePay();

    return () => {
      window.removeEventListener('message', eventHandler, false);
    };
  }, [config, eventHandler]);

  const getBaseUrl = useCallback(() => {
    const baseUrl = 'https://checkout.noramp.io';
    // const baseUrl = 'http://localhost:4000';

    return `${baseUrl}`;
  }, []);

  const getSrc = useCallback(
    (config: NoRampConfig) => {
      const { priceId, theme, user, userCanEditWalletAddress } = config;

      const baseUrl = getBaseUrl();

      const queryParams: string[] = [];

      if (theme) {
        queryParams.push(`theme=${theme}`);
      }

      if (user) {
        queryParams.push(`user=${user}`);
      }

      if (userCanEditWalletAddress) {
        queryParams.push(
          `userCanEditWalletAddress=${userCanEditWalletAddress}`
        );
      }

      const queryString =
        queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

      return `${baseUrl}/${priceId}${queryString}`;
    },
    [getBaseUrl]
  );

  const insertIframe = useCallback(
    (src: string) => {
      frameIdRef.current = `noramp-widget-${Date.now()}`;
      const iframe = document.createElement('iframe');
      iframe.id = frameIdRef.current;
      iframe.title = 'NoRamp';
      iframe.src = src;
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.allow = 'clipboard-write';
      iframe.style.cssText =
        'position: fixed; inset: 0px; z-index: 2147483647; border-width: 0px; overflow: hidden auto; top: 0, left: 0, width: 100%, height: 100%';
      iframe.style.display = 'block';
      document.body.appendChild(iframe);
      iframeRef.current = iframe;
    },
    [isOpen, frameIdRef, iframeRef]
  );

  const open = () => {
    if (isOpen) return;

    if (iframeRef?.current) {
      iframeRef.current.style.display = 'block';
    } else {
      const src = getSrc(config);
      insertIframe(src);
    }
    setIsOpen(true);
  };

  const close = () => {
    if (iframeRef.current) {
      iframeRef.current.style.display = 'none';

      setIsOpen(false);
    }
  };

  return {
    close,
    open,
    isOpen,
  };
};

export default useNoRampModal;
