import { useEffect, useState } from "react";
import ReactModal from "react-modal";
//images

ReactModal.setAppElement("#root");

export function ModalSetup({ showModal, setShowModal, children }) {
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
      {children}
      <div className="flex w-full justify-end text-sm mt-4 gap-4">
        <button
          className="text-[#E6A44D] hover:underline hover:underline-offset-3"
          onClick={closeModal}
        >
          Cancelar
        </button>
        <button
          className="border border-[#E6A44D] rounded-full px-3 py-1 text-[#E6A44D] font-semibold hover:bg-[#E6A44D] hover:text-white transition-all hover:scale-110"
          onClick={closeModal}
        >
          Confirmar
        </button>
      </div>
    </ReactModal>
  );
}
