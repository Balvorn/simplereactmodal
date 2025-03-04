import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
let modalRef = null;
export default function Modal({ children, showCloseButton = true, onClose = () => { }, buttonText = "Close", backDropClose = false }) {
    const localRef = useRef(null);
    useEffect(() => {
        modalRef = localRef.current;
        return () => {
            modalRef = null;
        };
    }, []);
    const handleBackdropClick = (event) => {
        if (backDropClose && localRef.current) {
            var rect = localRef.current.getBoundingClientRect();
            var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                closeModal();
            }
        }
    };
    return (_jsxs("dialog", { ref: localRef, onClick: handleBackdropClick, onClose: onClose, children: [_jsx("div", { children: children }), showCloseButton && (_jsx("form", { method: "dialog", children: _jsx("button", { autoFocus: true, children: buttonText }) }))] }));
}
export function openModal() {
    modalRef === null || modalRef === void 0 ? void 0 : modalRef.showModal();
}
export function closeModal() {
    modalRef === null || modalRef === void 0 ? void 0 : modalRef.close();
}
