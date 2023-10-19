import { useState } from "react";
import DictionaryView from "./DictionaryView";
//images
import Add from "./assets/plus.svg?react";

export default function EditTextDictionary() {
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
  const [addingProperty, setAddingProperty] = useState(false);

  const handleNameChange = (path) => {
    setOldName(path);
    setShowInput(true);
  };

  const confirmNameChange = () => {
    const updatedThings = { ...things };
    let current = updatedThings;

    for (let i = 0; i < oldName.length - 1; i++) {
      current = current[oldName[i]];
    }

    current[newName] = current[oldName[oldName.length - 1]];
    delete current[oldName[oldName.length - 1]];

    setThings(updatedThings);
    setShowInput(false);
    setOldName([]);
    setNewName("");
  };

  const cancelNameChange = () => {
    setShowInput(false);
    setOldName([]);
    setNewName("");
  };

  const deleteProperty = (path) => {
    const updatedThings = { ...things };
    let current = updatedThings;

    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }

    delete current[path[path.length - 1]];
    setThings(updatedThings);
  };

  const addProperty = (path) => {
    setAddingProperty(true);
    setShowInput(true);
  };

  const confirmAddProperty = () => {
    if (newName.trim() !== "") {
      const updatedThings = { ...things };

      if (oldName.length === 0) {
        // Agregar propiedad a nivel principal
        updatedThings[newName] = {};
      } else {
        let current = updatedThings;
        let parent = updatedThings;

        for (let i = 0; i < oldName.length; i++) {
          parent = current;
          current = current[oldName[i]];
        }

        parent[oldName[oldName.length - 1]] = Object.assign(
          { [newName]: {} },
          current
        );
      }

      setThings(updatedThings);
      setNewName("");
      setAddingProperty(false);
    }
  };

  const cancelAddProperty = () => {
    setAddingProperty(false);
    setNewName("");
  };

  return (
    <>
      {/* <div className="relative w-fit mt-3 mb-3 hover:scale-105 transition-all">
        <button
          onClick={() => addProperty([])}
          className="text-sm bg-[#60378D] text-white pr-7 font-medium pl-3 py-0.5 rounded-full"
        >
          Añadir etiqueta a nivel más alto
        </button>
        <Add className="w-[14px] h-auto fill-white absolute right-2 top-[4px]" />
      </div> */}
      {showInput && addingProperty ? (
        <div>
          <input
            type="text"
            placeholder="Nuevo nombre de propiedad"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={confirmAddProperty}>Confirmar</button>
          <button onClick={cancelAddProperty}>Cancelar</button>
        </div>
      ) : (
        <div
          className="relative w-fit mt-3 mb-3 hover:scale-105 transition-all"
          onClick={() => addProperty([])}
        >
          <button className="text-sm bg-[#60378D] text-white pr-7 font-medium pl-3 py-0.5 rounded-full">
            Añadir etiqueta a nivel más alto
          </button>
          <Add className="w-[14px] h-auto fill-white absolute right-2 top-[4px]" />
        </div>
      )}
      {showInput ? (
        <div>
          <input
            type="text"
            placeholder="Nuevo nombre"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={confirmNameChange}>Confirmar Cambio</button>
          <button onClick={cancelNameChange}>Cancelar Cambio</button>
        </div>
      ) : null}
      <DictionaryView
        data={things}
        onNameChange={handleNameChange}
        onDeleteProperty={deleteProperty}
        onAddProperty={addProperty}
      />
    </>
  );
}
