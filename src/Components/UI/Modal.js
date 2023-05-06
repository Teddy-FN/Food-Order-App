import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.css";

const Backdrops = (props) => {
  return <div className={Styles.backdrop} onClick={props.onClose} />;
};

const Overlays = (props) => {
  return (
    <div className={Styles.modal}>
      <div className={Styles.content}>{props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrops onClose={props.onClick} />,
        portalElements
      )}
      {ReactDOM.createPortal(
        <Overlays>{props.children}</Overlays>,
        portalElements
      )}
      {/* <Backdrops />
      <Overlays>{props.children}</Overlays> */}
    </Fragment>
  );
};

export default Modal;
