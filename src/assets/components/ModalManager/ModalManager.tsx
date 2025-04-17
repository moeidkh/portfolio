import React, { ReactNode, useCallback, useEffect, useMemo } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./ModalManager.stylex";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { modals, ModalTypes } from "./modal";
import { ModalAction } from "../../../Redux/Modal/ModalReducer";

const ModalManager = () => {
  const dispatch = useDispatch();
  const modal = useSelector(({ ModalReducer }) => ModalReducer);
  const { theme } = useSelector(({ ThemeReducer }) => ThemeReducer);
  
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch({
          type: ModalAction.CloseModal,
          payload: { modalType: modal.modalType },
        });
      }
    };

    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [modal.modalType]);

  useEffect(() => {
    if (modal.modalType) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal.modalType]);

  const dimOnclickHandler = () => {
    dispatch({
      type: ModalAction.CloseModal,
      payload: { modalType: modal.modalType },
    });
  };
  if (modal.modalType === undefined) return null;
  const ModalComponent = modals[modal.modalType];

  const children = (
    <div {...stylex.props(styles.container, theme)} onClick={dimOnclickHandler}>
      {ModalComponent && <ModalComponent />}
    </div>
  );

  return (
    <>
      {modal.modalType && (
        <>{createPortal(children, document.getElementById("portal")!)}</>
      )}
    </>
  );
};

export default ModalManager;
