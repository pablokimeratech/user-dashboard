export default function StepOneNewDictionary() {
  return (
    <div className="w-fit mt-10 border border-[#D5D4D5] rounded-lg px-10 py-8">
      <p className="text-sm">
        Por favor, introduce un nombre para el diccionario:
      </p>
      <input
        type="text"
        className="outline-none border border-[#D5D4D5] hover:border-[#ABAAAA] focus:border-[#ABAAAA] active:border-[#ABAAAA] w-full text-[#585555] mt-2 rounded-md px-2 py-0.5 text-sm"
      />
      <div className="flex w-full justify-end text-sm mt-4 gap-4">
        <button className="text-[#E6A44D] hover:underline hover:underline-offset-3">
          Cancel
        </button>
        <button className="border border-[#E6A44D] rounded-full px-3 py-1 text-[#E6A44D] font-semibold hover:bg-[#E6A44D] hover:text-white transition-all hover:scale-110">
          Continuar
        </button>
      </div>
    </div>
  );
}
