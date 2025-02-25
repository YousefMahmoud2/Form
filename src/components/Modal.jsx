import React from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ data, onClose }) => {
  if (!data) return null; 

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className="mb-3">✅ Your message has been sent successfully!</h2>
        <p className="mb-3"><strong>Name:</strong> {data.name}</p>
        <p className="mb-3"><strong>Email:</strong> {data.email}</p>
        <p className="mb-5"><strong>Message:</strong> {data.message}</p>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
