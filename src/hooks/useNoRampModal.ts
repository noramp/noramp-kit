import { useCallback, useEffect, useRef, useState } from 'react';

type Config = {
  appId: string;
  priceId: string;
  testnet?: boolean;
  theme?: 'dark' | 'light';
  auth?: boolean;
  onEvent?: (payload: any) => void;
  onSuccess?: (payload: any) => void;
  onFailure?: (payload: any) => void;
  onClose?: (payload: any) => void;
};

const useNoRampModal = (config: Config) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const frameIdRef = useRef<string>('');

  const [isOpen, setIsOpen] = useState(false);

  const eventHandler = useCallback(
    (event: MessageEvent<any>) => {
      const { onEvent, onSuccess, onFailure, onClose } = config;

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
        case 'noramp:success':
          onSuccess?.(event.data?.payload);
          break;
      }
    },
    [config]
  );
  const getBaseUrl = useCallback((appId: string, testnet: boolean) => {
    const baseUrl = testnet
      ? 'https://testnet.noramp.io'
      : 'https://app.noramp.io';

    // const baseUrl = 'http://localhost:3000';
    return `${baseUrl}/embed/payments/${appId}`;
  }, []);

  const getSrc = useCallback(
    (config: Config, testnet: boolean) => {
      const { appId, priceId, theme = 'dark' } = config;
      const urlParams: Record<string, string> = {
        device: 'desktop',
        theme,
        auth: config.auth ? 'true' : 'false',
        price_id: priceId,
      };
      const urlSearchParams = new URLSearchParams(urlParams);
      const baseUrl = getBaseUrl(appId, testnet);
      return `${baseUrl}?${urlSearchParams.toString()}`;
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
