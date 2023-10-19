import { useState } from "react";
import DictionaryView from "./DictionaryView";

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

    parent[path[path.length - 1]] = Object.assign({ NewProperty: {} }, current);
    setThings(updatedThings);
  };

  return (
    <>
      <button onClick={() => addProperty([])}>
        Añadir Propiedad a nivel principal
      </button>

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
