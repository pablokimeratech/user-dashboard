//images
import StepOneNewDictionary from "./StepOneNewDictionary";
import StepTwoNewDictionary from "./StepTwoNewDictionary";
import Add from "./assets/plus.svg?react";

export default function TextTagger() {
  return (
    <div className="px-5 py-3 flex flex-col h-full overflow-auto">
      <p className=" text-xl font-semibold tracking-tighter">Text Tagger</p>
      <div className="flex gap-10 items-center">
        <p>Create new dictionary</p>
        <Add className="fill-green-500 hover:bg-green-500 hover:fill-white hover:cursor-pointer hover:scale-125 transition-all w-6 h-auto border-2 p-1 px-[5px] rounded-full border-green-500" />
      </div>

      <StepOneNewDictionary />
      <StepTwoNewDictionary />
    </div>
  );
}
