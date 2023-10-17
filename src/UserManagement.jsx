import { useState } from "react";
import ArrowUp from "./assets/arrow-up.svg?react";
import ArrowDown from "./assets/arrow-down.svg?react";

export default function UserManagement() {
  const [showUserInfo, setShowUserInfo] = useState(true);

  return (
    <div className="p-10 flex flex-col">
      <p className="text-2xl tracking-wide font-bold ">Control Panel</p>
      <div className="w-full bg-[#E4F7F3] mt-4 p-3 rounded-md">
        <div className="flex justify-between">
          <div className="flex w-full items-center mb-2 justify-between">
            <p className="text-sm font-bold ">
              Información general del usuario
            </p>
            <ArrowDown
              className="w-3 h-auto cursor-pointer"
              onClick={() => setShowUserInfo(!showUserInfo)}
            />
          </div>
        </div>
        {showUserInfo && (
          <>
            <div className="grid grid-cols-2">
              <div className="flex text-sm">
                <p>Name: &nbsp;</p>
                <p>"username"</p>
              </div>
              <div className="flex text-sm">
                <p>Email: &nbsp;</p>
                <p>"email@useremail.com"</p>
              </div>
            </div>
            <p className="mt-2 text-sm font-semibold">Free Account</p>
            <p className="mt-2 text-sm mb-4">Parámetros de la cuenta:</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <p className="text-3xl ">400</p>
                <p className="text-sm">Max Tags</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl">12</p>
                <p className="text-sm">Max Dictionaries</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl">25</p>
                <p className="text-sm">Max Ref Imgs</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl">1000000</p>
                <p className="text-sm">Max DB Imgs</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl">200</p>
                <p className="text-sm">Max Metadata Memory</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl">1000000</p>
                <p className="text-sm">Max DB Elements</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
