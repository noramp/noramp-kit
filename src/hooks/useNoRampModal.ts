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
  const getBaseUrl = useCallback((testnet: boolean) => {
    const baseUrl = testnet
      ? 'https://checkout-testnet.noramp.io'
      : 'https://checkout.noramp.io';

    return `${baseUrl}`;
  }, []);

  const getSrc = useCallback(
    (config: NoRampConfig, testnet: boolean) => {
      const { priceId, theme, user } = config;

      const baseUrl = getBaseUrl(testnet);

      const queryParams: string[] = [];

      if (theme) {
        queryParams.push(`theme=${theme}`);
      }

      if (user) {
        queryParams.push(`user=${user}`);
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
        'position: fixed; inset: 0px; z-index: 2147483647; border-width: 0px;   overflow: hidden auto; top: 0, left: 0, width: 100%, height: 100%';
      iframe.style.display = isOpen ? 'block' : 'none';
      document.body.appendChild(iframe);
      iframeRef.current = iframe;
    },
    [isOpen, frameIdRef, iframeRef]
  );

  useEffect(() => {
    const { testnet = false } = config;
    const src = getSrc(config, testnet);
    insertIframe(src);

    const applePay = async () => {
      const stripe = await loadStripe(
        'pk_test_51Kvq6SIkFYA0Bt9COhStV61cQKyfUE8QoJyTSnDi2s0a6OsKiMLTqN0Cm8q1kjqIXzMpB8ZWF60vWIQFIjT3JWWm00IpaUbajk'
      );

      window.addEventListener('message', eventHandler, false);
      const targetOrigin = getBaseUrl(testnet);

      const frame: any = document.querySelector('[title="NoRamp"]');

      const outputElement = document.querySelector('#output');

      let paymentResponse: any;

      const paymentRequest = stripe!.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Apple Pay in a Frame!',
          amount: 0,
          pending: true,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      window.addEventListener('message', (event) => {
        if (event.origin !== targetOrigin) {
          return;
        }

        if (event.data.type == 'letsGo') {
          (async () => {
            const result = await paymentRequest.canMakePayment();

            if (result && result.applePay) {
              frame!.contentWindow.postMessage(
                {
                  type: 'canMakePayment',
                },
                targetOrigin
              );
            } else {
              outputElement!.innerHTML =
                '<strong>Error:</strong> <code>paymentRequest.canMakePayment()</code> indicated Apple Pay cannot be used.  Try opening this page in Safari and make sure you have a valid payment card in your Apple Wallet.';
            }
          })();
        }

        if (event.data.type == 'requestPayment') {
          paymentRequest.show();
        }

        if (event.data.type == 'completePaymentRequest') {
          paymentResponse!.complete(event.data.status);
        }
      });

      paymentRequest.on('paymentmethod', async (event: any) => {
        outputElement!.innerHTML =
          '<p>Got a Payment Method: <code>' +
          event.paymentMethod.id +
          '</code></p><p>Sending it to the frame!</p>';

        paymentResponse = event;

        frame.contentWindow.postMessage(
          {
            messageType: 'paymentMethod',
            paymentMethod: event.paymentMethod.id,
          },
          targetOrigin
        );
      });
    };

    applePay();

    return () => {
      window.removeEventListener('message', eventHandler, false);

      if (iframeRef?.current) {
        iframeRef?.current.parentNode?.removeChild(iframeRef.current);
      }
    };
  }, [config, eventHandler, getSrc, insertIframe]);

  const open = () => {
    if (iframeRef.current) {
      iframeRef.current.style.display = 'block';
      setIsOpen(true);
    }
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
