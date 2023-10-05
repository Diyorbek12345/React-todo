import React from "react";
import "./modal.scss";

export const Modal = ({ children, isOpen, close }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal_content">
        <button className="closebtn" onClick={() => close(false)}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
