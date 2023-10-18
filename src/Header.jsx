//Images
import KimeraLogoHorizontal from "./assets/kimera-logo-horizontal.png";
import KimeraLogoVertical from "./assets/kimera-logo-vertical.png";

export default function Header() {
  return (
    <div className="h-fit flex justify-between align-middle text-center px-4 bg-white border-b-[1px] border-[#454B59]">
      <img src={KimeraLogoHorizontal} alt="logo" className="h-20 w-auto" />
      <p className="border-[1.5px] border-black text-center font-semibold rounded-full px-1 py-1 h-fit w-auto mt-6">
        PD
      </p>
    </div>
  );
}
