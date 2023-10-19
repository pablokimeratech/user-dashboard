//images
import { useEffect, useState } from "react";
import StepOneNewDictionary from "./StepOneNewDictionary";
import StepTwoNewDictionary from "./StepTwoNewDictionary";
import TagImage from "./TagImage";
import Add from "./assets/plus.svg?react";
import { ModalSetup } from "./ModalSetup";
import Select from "react-select";
//libraries

// const things = {
//   animal: {
//     dog: {
//       dalmata: {
//         baby: {},
//         adult: {},
//       },
//       bulldog: {},
//       labrador: {},
//       poodle: {
//         white: {},
//         black: {},
//       },
//     },
//     cat: {
//       white: {},
//       black: {},
//     },
//     frog: {
//       green: {},
//       blue: {},
//     },
//   },
//   person: {
//     white: {},
//     "african american": {},
//     asian: {},
//     latino: {},
//   },
//   TV: {
//     LG: {},
//     Samsung: {},
//   },
// };

const TreeView = ({ data, onNameChange, onDeleteProperty, path = [] }) => (
  <ul className="tree">
    {Object.keys(data).map((key) => (
      <li key={key}>
        <span className="node">{key}</span>
        <button onClick={() => onNameChange([...path, key])}>
          Cambiar Nombre
        </button>
        <button onClick={() => onDeleteProperty([...path, key])}>
          Eliminar
        </button>
        {data[key] && Object.keys(data[key]).length > 0 && (
          <TreeView
            data={data[key]}
            onNameChange={onNameChange}
            onDeleteProperty={onDeleteProperty}
            path={[...path, key]}
          />
        )}
      </li>
    ))}
  </ul>
);

export default function TextTagger() {
  const [things, setThings] = useState({
    animal: {
      dog: {
        dalmata: {
          baby: {},
          adult: {},
        },
        bulldog: {},
        goldenRetriever: {}, // Cambiamos 'labrador' a 'goldenRetriever'
        poodle: {
          white: {},
          black: {},
        },
      },
      cat: {
        white: {},
        black: {},
      },
      frog: {
        green: {},
        blue: {},
      },
    },
    person: {
      white: {},
      africanAmerican: {},
      asian: {},
      latino: {},
    },
    TV: {
      LG: {},
      Samsung: {},
    },
  });
  const [newName, setNewName] = useState("");
  const [oldName, setOldName] = useState("");
  const [showInput, setShowInput] = useState(false);
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

  const handleNameChange = (path) => {
    setOldName(path);
    setShowInput(true);
    setNewName(path[path.length - 1]);
  };

  const confirmNameChange = () => {
    const updatedThings = { ...things };
    let current = updatedThings;

    // Navegar por la ruta para llegar al objeto que se actualizará
    for (let i = 0; i < oldName.length - 1; i++) {
      current = current[oldName[i]];
    }

    current[newName] = current[oldName[oldName.length - 1]];
    delete current[oldName[oldName.length - 1]];

    setThings(updatedThings);
    setNewName("");
    setShowInput(false);
    setOldName([]);
  };

  const deleteProperty = (path) => {
    const updatedThings = { ...things };
    let current = updatedThings;

    // Navegar por la ruta para llegar al objeto que se eliminará
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }

    delete current[path[path.length - 1]];
    setThings(updatedThings);
  };

  // const [pathToUpdate, setPathToUpdate] = useState([]);

  // useEffect(() => {
  //   console.log("things son:", things);
  //   for (const propiedad in things) {
  //     if (typeof things[propiedad] === "object") {
  //       let objeto = things[propiedad];
  //       console.log(`${propiedad}`, "tiene un objeto");
  //       for (const propiedad in objeto)
  //         if (typeof objeto[propiedad] === "object") {
  //           console.log(objeto[propiedad], "esta dentrisimo");
  //         }
  //     }
  //   }
  // }, []);

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
            {showInput ? (
              <div>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button onClick={confirmNameChange}>Confirmar Cambio</button>
              </div>
            ) : null}
            <TreeView
              data={things}
              onNameChange={handleNameChange}
              onDeleteProperty={deleteProperty}
            />
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
      {/* <ModalSetup
        showModal={showModal.createDictionaryStepTwo}
        setShowModal={setShowModal}
      >
      </ModalSetup> */}
    </div>
  );
}
