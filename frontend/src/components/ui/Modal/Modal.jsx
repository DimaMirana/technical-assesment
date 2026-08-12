import { useEffect } from "react";

import styles from "./Modal.module.scss";

const Modal = ({
    isOpen,
    onClose,
    children,
    ariaLabel = "Dialog",
}) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className={styles.backdrop}
            onMouseDown={onClose}
        >
            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-label={ariaLabel}
                onMouseDown={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className={styles.closeButton}
                    aria-label="Close video"
                    onClick={onClose}
                >
                    ×
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;