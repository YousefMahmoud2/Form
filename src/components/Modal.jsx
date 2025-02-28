import React from "react";

const Modal = ({ data, onClose }) => {
  if (!data) return null; 

  return (
    <div className="rounded-2xl fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
      <div className="bg-white p-14 rounded-2xl text-center mo ">
        <h2 className="mb-3 ">✅ Your message has been sent successfully!</h2>
        <p className="mb-3"><strong>Name:</strong> {data.name}</p>
        <p className="mb-3"><strong>Email:</strong> {data.email}</p>
        <p className="mb-5"><strong>Message:</strong> {data.message}</p>
        <button className="bg-[#ff5c5c] text-white border-none p-3 mt-4 cursor-pointer	 rounded-[5px]" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
