interface ModalProps {
    children?: React.ReactNode;
    onClose?: () => void;
    backDropClose?: boolean;
    showCloseButton?: boolean;
    buttonText?: string;
}
export default function Modal({ children, showCloseButton, onClose, buttonText, backDropClose }: ModalProps): import("react/jsx-runtime").JSX.Element;
export declare function openModal(): void;
export declare function closeModal(): void;
export {};
