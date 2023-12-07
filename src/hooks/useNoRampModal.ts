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

      const outputElement = document.querySelector('#output');

      if (!frame || !outputElement) {
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
          label: 'Apple Pay in a Frame!',
          amount: 1099,
          pending: true,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      window.addEventListener('message', (event) => {
        console.log('message event kit: ', event.data.type);

        if (event.data.type == 'letsGo') {
          (async () => {
            const result = await paymentRequest.canMakePayment();
            console.log('result: ', result);

            if (result && result.applePay) {
              frame.contentWindow?.postMessage(
                {
                  type: 'canMakePayment',
                },
                '*'
              );
            } else {
              console.error('Cannot make payment', result);
              outputElement.innerHTML =
                '<strong>Error:</strong> <code>paymentRequest.canMakePayment()</code> indicated Apple Pay cannot be used.  Try opening this page in Safari and make sure you have a valid payment card in your Apple Wallet.';
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
        outputElement.innerHTML =
          '<p>Got a Payment Method: <code>' +
          event.paymentMethod.id +
          '</code></p><p>Sending it to the frame!</p>';

        paymentResponse = event;

        frame.contentWindow?.postMessage({
          messageType: 'paymentMethod',
          paymentMethod: event.paymentMethod.id,
        });
      });
    }

    applePay();

    return () => {
      window.removeEventListener('message', eventHandler, false);
    };
  }, [config, eventHandler]);

  const getBaseUrl = useCallback((testnet: boolean) => {
    const baseUrl = testnet
      ? 'https://checkout-testnet.noramp.io'
      : 'https://checkout.noramp.io';

    // const baseUrl = 'http://localhost:4000';

    return `${baseUrl}`;
  }, []);

  const getSrc = useCallback(
    (config: NoRampConfig, testnet: boolean) => {
      const { priceId, theme, user, userCanEditWalletAddress } = config;

      const baseUrl = getBaseUrl(testnet);

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
      iframe.style.display = 'flex';
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
      const { testnet = false } = config;
      const src = getSrc(config, testnet);
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
