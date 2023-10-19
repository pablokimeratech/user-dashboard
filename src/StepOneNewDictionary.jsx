export default function StepOneNewDictionary() {
  return (
    <div className="w-fit mt-1  rounded-lg px-10 py-8">
      <p className="text-sm">
        Por favor, introduce un nombre para el diccionario:
      </p>
      <input
        type="text"
        className="outline-none border border-[#D5D4D5] hover:border-[#ABAAAA] focus:border-[#ABAAAA] active:border-[#ABAAAA] w-full text-[#585555] mt-2 rounded-md px-2 py-0.5 text-sm"
      />
    </div>
  );
}
