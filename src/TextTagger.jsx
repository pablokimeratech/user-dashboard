//images
import { useEffect, useState } from "react";
import StepOneNewDictionary from "./StepOneNewDictionary";
import StepTwoNewDictionary from "./StepTwoNewDictionary";
import TagImage from "./TagImage";
import Add from "./assets/plus.svg?react";
import { ModalSetup } from "./ModalSetup";
import Select from "react-select";
import EditTextDictionary from "./EditTextDictionary";
//libraries

export default function TextTagger() {
  const [showModal, setShowModal] = useState({
    tagImg: false,
    createDictionaryStepOne: false,
    createDictionaryStepTwo: false,
  });
  const dictionaries = [
    { name: "Fuentes", id: 1, value: "Fuentes", label: "Fuentes" },
    { name: "Arboles", id: 2, value: "Arboles", label: "Arboles" },
    { name: "Animales", id: 3, value: "Animales", label: "Animales" },
    { name: "Casas", id: 4, value: "Casas", label: "Casas" },
  ];

  return (
    <div className="px-5 py-3 flex flex-col h-full overflow-auto">
      <p className=" text-xl font-semibold mb-10 tracking-tighter">
        Text Tagger
      </p>
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 items-center border border-[#D5D4D5] rounded-lg w-[210px] px-6 py-4 shadow">
          <p className="text-sm font-semibold">Create new dictionary</p>
          <div className="mb-6 -mt-2">
            <Add
              className="fill-green-500 hover:bg-green-500 hover:fill-white hover:cursor-pointer hover:scale-125 transition-all w-10 h-auto border-2 p-1 px-[5px] rounded-full border-green-500"
              onClick={() =>
                setShowModal((prev) => ({
                  ...prev,
                  createDictionaryStepOne: true,
                }))
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center border border-[#D5D4D5] rounded-lg w-[210px] px-6 py-4 shadow">
          <p className="text-sm font-semibold">Tag Image</p>
          <div className="mb-6 -mt-2">
            <Add
              className="fill-green-500 hover:bg-green-500 hover:fill-white hover:cursor-pointer hover:scale-125 transition-all w-10 h-auto border-2 p-1 px-[5px] rounded-full border-green-500"
              onClick={() =>
                setShowModal((prev) => ({ ...prev, tagImg: true }))
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-10 border border-[#D5D4D5] rounded-lg px-8 py-10 shadow">
        <p className=" font-semibold">Mis Diccionarios</p>
        <div className="grid grid-cols-2 mt-4">
          <div className="flex flex-col w-fit">
            <p className="text-sm ">
              Elige un diccionario para ver su contenido:
            </p>
            <div className="w-full mt-4 text-sm">
              <Select
                className="basic-single"
                classNamePrefix="select"
                name="color"
                options={dictionaries}
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">
              Diccionario <span className="italic">things</span>
            </p>
            <EditTextDictionary />
          </div>
        </div>
      </div>
      <ModalSetup showModal={showModal.tagImg} setShowModal={setShowModal}>
        <TagImage />
      </ModalSetup>
      <ModalSetup
        showModal={showModal.createDictionaryStepOne}
        setShowModal={setShowModal}
      >
        <StepOneNewDictionary />
        <StepTwoNewDictionary />
      </ModalSetup>
    </div>
  );
}
