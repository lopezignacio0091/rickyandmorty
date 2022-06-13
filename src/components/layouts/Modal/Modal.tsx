import React, { useEffect, useState, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "./types";
import styles from "./styles.module.scss";

const modalRoot: any = document.getElementById("overlay-root");
const stopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
  event.stopPropagation();

const Modal: React.FC<ModalProps> = (props) => {
  const { children, width, height, isOpen, onClose, notOverlayClose } = props;
  const [element] = useState(document.createElement("div"));
  const modalStyles = useMemo(
    () => ({
      width,
      height,
    }),
    [height, width]
  );
  const modalContainerClases = [
    styles.modalContainer,
    isOpen ? styles.modalShow : "",
  ].join(" ");

  const modalClases = [styles.modal, isOpen ? styles.modalContent : ""].join(
    " "
  );

  useEffect(() => {
    modalRoot?.appendChild(element);
    return () => {
      if (modalRoot && modalRoot.children)
        for (let i = 0; i < modalRoot.children.length; i += 1) {
          if (modalRoot.children[i].isEqualNode(element))
            modalRoot.removeChild(element);
        }
    };
  }, [element]);

  const modalStructure = useCallback(
    () => (
      <div
        className={modalContainerClases}
        onClick={notOverlayClose ? undefined : onClose}
        role="presentation"
      >
        <div
          onClick={stopPropagation}
          className={modalClases}
          style={modalStyles}
          role="presentation"
        >
          {children}
        </div>
      </div>
    ),
    [
      modalStyles,
      children,
      modalClases,
      modalContainerClases,
      onClose,
      notOverlayClose,
    ]
  );

  return createPortal(modalStructure(), element);
};

export default Modal;
