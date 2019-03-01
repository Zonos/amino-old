import React from "react";
import { ReactDOM } from "react-dom";

export const Notification = props => {
  ReactDOM.createPortal(props.children, document.body);
};
