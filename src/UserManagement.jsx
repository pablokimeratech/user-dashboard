//images
import ArrowUp from "./assets/arrow-up.svg?react";
import ArrowDown from "./assets/arrow-down.svg?react";
import Email from "./assets/envelope-regular.svg?react";
import Cancel from "./assets/ban-solid.svg?react";
import User from "./assets/user-management.svg?react";
import Warning from "./assets/warning2.svg?react";
import Xmark from "./assets/xmark.svg?react";
//functions and hooks
import { useState } from "react";
//libraries
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default function UserManagement() {
  const [showUserInfo, setShowUserInfo] = useState(true);
  const [showModal, setShowModal] = useState(false);
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

  function openModal() {
    setShowModal(true);
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
    <div className="px-5 py-3 flex flex-col h-full overflow-auto">
      <p className=" text-xl font-semibold tracking-tighter">
        Panel de Control
      </p>
      <div className="flex flex-wrap gap-5 w-full">
        <div className="w-full min-w-[670px] border border-[#D5D4D5] mt-4 p-3 rounded-lg">
          <div className="flex justify-between">
            <div className="flex w-full items-center mb-5 justify-between">
              <p className="text-sm  bg-[#E6A44D] rounded-xl px-3 py-0.5 text-white">
                Información general
              </p>
              <ArrowDown
                className="w-3 h-auto cursor-pointer"
                onClick={() => setShowUserInfo(!showUserInfo)}
              />
            </div>
          </div>
          {showUserInfo && (
            <>
              <div className="flex justify-between mb-1">
                <div className="flex gap-4 text-sm">
                  <User className="w-3 ml-0.5 h-auto" />
                  <p className="ml-0.5">pablodahl</p>
                </div>
                <p className="mr-5 text-[#60378D] font-semibold">
                  Free Account
                </p>
              </div>
              <div className="flex text-sm items-center gap-4">
                <Email className="w-4 h-auto" />
                <p>pablo.dahl@kimeratechnologies.com</p>
              </div>
              <div className="border-t-[0.5px] border-[#D5D4D5] my-6 mx-4"></div>
              <p className="mt-2 text-sm mb-4">Parámetros de la cuenta:</p>
              <div className="grid grid-cols-3 gap-12 mb-2">
                <div className="flex flex-col items-center">
                  <p className="text-2xl ">400</p>
                  <p className="text-sm">Max Tags</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl">12</p>
                  <p className="text-sm">Max Dictionaries</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl">25</p>
                  <p className="text-sm">Max Ref Imgs</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl">1000000</p>
                  <p className="text-sm">Max DB Imgs</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl">200</p>
                  <p className="text-sm">Max Metadata Memory</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl">1000000</p>
                  <p className="text-sm">Max DB Elements</p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="min-w-[670px] w-full border border-[#D5D4D5] mt-4 p-3 rounded-lg">
          <div className="flex justify-between">
            <div className="flex w-full items-center mb-5 justify-between">
              <p className="text-sm bg-green-500 rounded-xl px-3 py-0.5 text-white">
                Procesos Activos
              </p>
              <ArrowDown
                className="w-3 h-auto cursor-pointer"
                onClick={() => setShowUserInfo(!showUserInfo)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            {/* <p className="text-sm">Aquí se muestran los procesos activos</p> */}
            <div className="grid grid-cols-8 px-4">
              <div className="col-span-5">
                <p className="text-sm font-semibold">ID</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-bold">Progreso</p>
              </div>
              <div className="col-span-1">
                <p></p>
              </div>
            </div>
            <div className="grid grid-cols-8 px-4 text-sm">
              <div className="col-span-5">
                <p className="my-1">proceso 1</p>
                <p className="my-1">proceso 2</p>
                <p className="my-1">proceso 3</p>
                <p className="my-1">proceso 4</p>
              </div>
              <div className="col-span-1">
                <div class="w-full bg-gray-300 rounded-full">
                  <div class="h-2 rounded-full bg-[#60378D] mt-[15px] w-[30%]"></div>
                </div>
                <div class="w-full bg-gray-300 rounded-full">
                  <div class="h-2 rounded-full bg-[#60378D] mt-[15px] w-[10%]"></div>
                </div>
                <div class="w-full bg-gray-300 rounded-full">
                  <div class="h-2 rounded-full bg-[#60378D] mt-[15px] w-[5%]"></div>
                </div>
                <div class="w-full bg-gray-300 rounded-full">
                  <div class="h-2 rounded-full bg-[#60378D] mt-[15px] w-[95%]"></div>
                </div>
              </div>
              <div className="col-span-1">
                <p className="my-[8px] ml-1  text-xs font-semibold">30%</p>
                <p className="my-[8px] ml-1 text-xs font-semibold">10%</p>
                <p className="my-[8px] ml-1 text-xs font-semibold">5%</p>
                <p className="my-[8px] ml-1 text-xs font-semibold">95%</p>
              </div>
              <div className="col-span-1">
                <Cancel
                  className="w-[16px] fill-[#DC2626] my-2 cursor-pointer"
                  onClick={openModal}
                />
                <Cancel className="w-[16px] fill-[#DC2626] my-2 cursor-pointer" />
                <Cancel className="w-[16px] fill-[#DC2626] my-2 cursor-pointer" />
                <Cancel className="w-[16px] fill-[#DC2626] my-2 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
            ¿Estás seguro de que quieres cancelar el proceso 1? Este proceso no
            es reversible.
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
    </div>
  );
}
