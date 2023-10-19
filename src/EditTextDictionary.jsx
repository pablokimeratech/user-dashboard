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
  const [newProperty, setNewProperty] = useState("");

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

  const addProperty = (path) => {
    const updatedThings = { ...things };
    let current = updatedThings;
    let parent = updatedThings;

    for (let i = 0; i < path.length; i++) {
      parent = current;
      current = current[path[i]];
    }

    // Verificar si estamos agregando una propiedad a nivel más alto
    if (path.length === 0) {
      updatedThings[newName] = {};
    } else {
      parent[path[path.length - 1]] = Object.assign({ [newName]: {} }, current);
    }

    setThings(updatedThings);
    setNewName("");
  };

  return (
    <>
      <div className="relative w-fit mt-3 mb-3 hover:scale-105 transition-all">
        <button
          onClick={() => addProperty([])}
          className="text-sm bg-[#60378D] text-white pr-7 font-medium pl-3 py-0.5 rounded-full"
        >
          Añadir etiqueta a nivel más alto
        </button>
        <Add className="w-[14px] h-auto fill-white absolute right-2 top-[4px]" />
      </div>
      {/* <Add
        className="w-5 h-auto fill-green-500"
        onClick={() => addProperty([])}
      /> */}

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
      <DictionaryView
        data={things}
        onNameChange={handleNameChange}
        onDeleteProperty={deleteProperty}
        onAddProperty={addProperty}
      />
    </>
  );
}
