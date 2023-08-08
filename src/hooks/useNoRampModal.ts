import { useCallback, useEffect, useRef, useState } from 'react';
import { NoRampConfig } from '../types';

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
      const { priceId } = config;

      const baseUrl = getBaseUrl(testnet);
      return `${baseUrl}/${priceId}`;
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

    window.addEventListener('message', eventHandler, false);

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
