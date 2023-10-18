import { useEffect, useState } from "react";
import ReactModal from "react-modal";
//images
import Warning from "./assets/warning2.svg?react";
import Xmark from "./assets/xmark.svg?react";

ReactModal.setAppElement("#root");

export function ModalSetup({ showModal, setShowModal }) {
  const [transitionModal, setTransitionModal] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transitionProperty: "all",
      transitionDuration: "150ms",
      transform: `${
        transitionModal
          ? "translate(-50%, -50%) scaleX(1) "
          : "translate(-50%, -50%) scaleX(0) "
      }`,
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      backdropFilter: "blur(2px)",
    },
  };

  useEffect(() => {
    if (showModal) openModal();
  }, [showModal]);

  function openModal() {
    // setShowModal(true);
    setTimeout(() => {
      setTransitionModal(true);
    }, 100);
  }
  function closeModal() {
    setTransitionModal(false);
    setTimeout(() => {
      setShowModal(false);
    }, 150);
  }

  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="example"
    >
      <div className="flex flex-col px-8 pt-3">
        <div className="flex justify-between items-center">
          <p className="text-[#E6A44D] text-xl mb-3 font-semibold tracking-tight ">
            ¡IMPORTANTE!
          </p>
          <Xmark
            className="w-4 cursor-pointer h-auto fill-gray-500"
            onClick={closeModal}
          />
        </div>
        <p className="text-sm font-semibold my-2 mb-4">
          ¿Estás seguro de que quieres cancelar el proceso 1? Este proceso no es
          reversible.
        </p>
        <div className="flex w-full justify-center">
          <Warning className="w-[120px] h-auto fill-[#E6A44D]" />
        </div>
        <div className="w-full text-end mt-4">
          <button
            className="border border-[#E6A44D] rounded-full px-3 py-1 text-[#E6A44D] font-semibold hover:bg-[#E6A44D] hover:text-white transition-all hover:scale-110"
            onClick={closeModal}
          >
            Confirmar
          </button>
        </div>
      </div>
    </ReactModal>
  );
}
