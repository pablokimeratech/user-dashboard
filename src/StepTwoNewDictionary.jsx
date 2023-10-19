//images
import { useEffect, useState } from "react";
import Add from "./assets/plus.svg?react";

export default function StepTwoNewDictionary() {
  const [showAddTag, setShowAddTag] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagToAdd, setTagToAdd] = useState();

  const addTag = () => {
    setShowAddTag(false);
    setTags((current) => [...current, { name: tagToAdd, id: Date.now() }]);
  };
  useEffect(() => {
    console.log(tags);
  }, [tags]);

  const handleUpdateObject = (tag) => {
    // let obj2 = { name: "etiquetaprueba", id: Date.now() };
    // let objFinal = (tag.obj2 = obj2);
    // console.log("tag is:", tag);
    // console.log(objFinal, "objFinal is");
    console.log("tag inside function is:", tag);
    setTags((current) =>
      current.map((obj) => {
        if (obj.id === tag.id) {
          let obj2 = { name: "etiquetaprueba", id: Date.now() };
          return { ...tag, obj2 };
        }
        return obj;
      })
    );
  };

  return (
    <div className="w-fit rounded-lg px-10  pb-8 text-sm">
      <p>
        A continuación añade las etiquetas principales, y después podrás añadir
        subeqtiquetas.
      </p>
      <div className="flex flex-col mt-5 gap-2">
        {showAddTag ? (
          <div className="relative w-fit">
            <input
              type="text"
              onChange={(e) => setTagToAdd(e.target.value)}
              className="min-w-[4rem] border border-[#D5D4D5] rounded-lg px-2 py-0.5 pr-9 text-sm outline-none hover:border-[#ABAAAA] focus:border-[#ABAAAA] active:border-[#ABAAAA] text-[#585555]"
            />
            <p
              className="absolute right-2 top-0.5 cursor-pointer "
              onClick={() => {
                addTag();
              }}
            >
              OK
            </p>
          </div>
        ) : (
          <div
            className="flex w-fit gap-2 bg-[#60378D] px-3 py-1 text-white rounded-lg cursor-pointer hover:scale-110 transition-all"
            onClick={() => setShowAddTag(true)}
          >
            <p className="text-xs">Añadir etiqueta</p>
            <Add className="w-3 fill-white" />
          </div>
        )}
        <div className="w-full rounded-lg min-h-[6rem] overflow-y-visible px-3 py-1 bg-[#D5D4D5]">
          {tags &&
            tags.map((tag) => {
              return (
                <div
                  key={tag.id}
                  onClick={() => {
                    console.log("añadir subetiqueta a", tag.name);
                    handleUpdateObject(tag);
                  }}
                >
                  <p className="text-sm">{tag.name}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
