import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createWrapperWithId } from '../../../utils';

interface IPortalProps {
  children: React.ReactNode;
  wrapperId: string;
}

function Portal({ children, wrapperId }: IPortalProps) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let portalContainer = document.getElementById(wrapperId);
    let isWrapperCreatedManually = false;

    if (!portalContainer) {
      const wrapper = createWrapperWithId('div', wrapperId);
      document.body.appendChild(wrapper);
      portalContainer = wrapper;
      isWrapperCreatedManually = true;
    }

    setWrapperElement(portalContainer);

    return () => {
      if (isWrapperCreatedManually && portalContainer?.parentNode) {
        portalContainer.parentNode.removeChild(portalContainer);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

export { Portal };
