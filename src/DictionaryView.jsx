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
          <span className="node">{key}</span>
          <button onClick={() => onNameChange([...path, key])}>
            Cambiar Nombre
          </button>
          <button onClick={() => onDeleteProperty([...path, key])}>
            Eliminar
          </button>
          <button onClick={() => onAddProperty([...path, key])}>
            Añadir Propiedad
          </button>
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
