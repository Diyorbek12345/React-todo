import React from "react";
import { Modal } from "../ui/modal";
import { Form } from "../form";
import style from "./card.module.scss"

export const Card = ({ firstName, lastName, id, setData }) => {
  const [open, setOpen] = React.useState(false);
  const deleteItem = () => {
    setData((p) => p.filter((item) => item.id !== id));
  };

  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div className={style.content}>
        <h1 className={style.title}>{firstName}</h1>
        <h1 className={style.text}>{lastName}</h1>
        <button className={style.deletbtn} onClick={deleteItem}>
          delete
        </button>
        <button className={style.editbtn} onClick={openModal}>
          Edit
        </button>
      </div>
      <Modal isOpen={open} close={setOpen}>
        <Form edit id={id} close={setOpen} setData={setData} />
      </Modal>
    </>
  );
};
