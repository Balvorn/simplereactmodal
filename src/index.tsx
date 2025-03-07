
import { useEffect, useRef } from 'react';

let modalRef: HTMLDialogElement | null = null;

interface ModalProps {
  children?: React.ReactNode;
  onClose?: () => void;
  backDropClose?: boolean;
  showCloseButton?: boolean;
  buttonText?: string;
}

export default function Modal({
  children,
  showCloseButton = true,
  onClose = () => { },
  buttonText = "Close",
  backDropClose = false
}: ModalProps) {

  const localRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    modalRef = localRef.current;
    return () => {
      modalRef = null;
    };
  }, []);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (backDropClose && localRef.current) {
      var rect = localRef.current.getBoundingClientRect();
      var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        closeModal();
      }
    }
  };

  return (
    <dialog ref={localRef} onClick={handleBackdropClick} onClose={onClose}>
      <div>{children}</div>
      {
        showCloseButton && (
          <form method="dialog">
            <button autoFocus>{buttonText}</button>
          </form>
        )
      }
    </dialog >
  );
}

export function openModal() {
  modalRef?.showModal();
}

export function closeModal() {
  modalRef?.close();
}