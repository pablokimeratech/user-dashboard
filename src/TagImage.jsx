import { useEffect, useState } from "react";
//libraries
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function TagImage() {
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [confidenceLevel, setConfidenceLevel] = useState("0.5");
  const dictionaries = [
    { name: "Fuentes", id: 1, value: "Fuentes", label: "Fuentes" },
    { name: "Arboles", id: 2, value: "Arboles", label: "Arboles" },
    { name: "Animales", id: 3, value: "Animales", label: "Animales" },
    { name: "Casas", id: 4, value: "Casas", label: "Casas" },
  ];
  const animatedComponents = makeAnimated();

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  const convertToConfidenceMetric = (num) => {
    setConfidenceLevel(num.target.value / 100);
  };

  return (
    <>
      <p className="text-sm font-semibold">
        Selecciona los diccionarios que quieres usar, busca la imagen a
        etiquetar y elige un nivel de confianza:
      </p>
      <div className="mt-4 text-xs">
        <p className="font-medium mb-2">Diccionarios:</p>
        <Select
          isMulti
          name="colors"
          components={animatedComponents}
          options={dictionaries}
          className="h-"
          // className="basic-multi-select"
          // classNamePrefix="select"
        />
      </div>
      <div className="text-xs mt-4">
        <p className="font-medium">Imagen:</p>
        <input type="file" multiple accept="image/*" onChange={onImageChange} />
        {imageUrls.map((imageSrc) => (
          <img src={imageSrc} />
        ))}
      </div>
      <div className="text-xs mt-4">
        <p className="font-medium mb-2">
          Nivel de confianza: {confidenceLevel}
        </p>
        <input
          type="range"
          min="1"
          max="100"
          id="slider"
          className="bg-[#E6A44D]"
          defaultValue="50"
          onChange={(e) => convertToConfidenceMetric(e)}
        />
      </div>
    </>
  );
}
