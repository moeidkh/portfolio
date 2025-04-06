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

  if (modal.modalType === undefined) return null;
  const ModalComponent = modals[modal.modalType];

  const dimOnclickHandler = () => {
    dispatch({
      type: ModalAction.CloseModal,
      payload: { modalType: modal.modalType },
    });
  };

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
