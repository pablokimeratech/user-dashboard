//images
import Edit from "./assets/edit.svg?react";
import Delete from "./assets/ban-solid.svg?react";
import Add from "./assets/plus.svg?react";
//styles
import "./DictionaryView.css";

export default function DictionaryView({
  data,
  onNameChange,
  onDeleteProperty,
  onAddProperty,
  path = [],
}) {
  return (
    <ul className="tree">
      {Object.keys(data).map((key) => (
        <li key={key}>
          <div className="flex items-center justify-between gap-3">
            <span className="mr-10 text-sm bg-[#E6A44D] tracking-wide text-white font-medium px-2 py-0.5 mb-1 rounded-full">
              {key}
            </span>
            <div className="flex items-center gap-4 mr-10">
              <Edit
                className="w-4 h-auto fill-[#827F80] cursor-pointer"
                onClick={() => onNameChange([...path, key])}
              />
              {/* <button onClick={() => onNameChange([...path, key])}>
            Cambiar Nombre
        </button> */}
              <Delete
                className="w-4 h-auto fill-red-500 cursor-pointer"
                onClick={() => onDeleteProperty([...path, key])}
              />
              {/* <button >
            Eliminar
        </button> */}
              <Add
                className="w-4 h-auto fill-green-500 cursor-pointer"
                onClick={() => onAddProperty([...path, key])}
              />
            </div>
          </div>
          {/* <button >
            Añadir Propiedad
          </button> */}
          {data[key] &&
            typeof data[key] === "object" &&
            Object.keys(data[key]).length > 0 && (
              <DictionaryView
                data={data[key]}
                onNameChange={onNameChange}
                onDeleteProperty={onDeleteProperty}
                onAddProperty={onAddProperty}
                path={[...path, key]}
              />
            )}
        </li>
      ))}
    </ul>
  );
}
