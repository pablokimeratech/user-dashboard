import "./App.css";
import KimeraLogoHorizontal from "./assets/kimera-logo-horizontal.png";
import KimeraLogoVertical from "./assets/kimera-logo-vertical.png";
import VisualTaggerIcon from "./assets/visual-tagger.svg?react";
import TextTaggerIcon from "./assets/text-tagger.svg?react";
import UserManagementIcon from "./assets/user-management.svg?react";
import Logout from "./assets/logout.svg?react";
import { useState } from "react";
import UserManagement from "./UserManagement";

function App() {
  const [selectedTab, setSelectedTab] = useState("text");
  const [showTabNames, setShowTabNames] = useState(false);

  return (
    <div className="h-screen">
      {/* header */}
      <div className="h-fit flex justify-between align-middle text-center px-4 bg-white border-b-[3px] border-[#f7f7f7]">
        <img src={KimeraLogoHorizontal} alt="logo" className="h-20 w-auto" />
        <p className="border-[1.5px] border-black text-center font-semibold rounded-full px-1.5 py-1 h-fit w-auto mt-6">
          PD
        </p>
      </div>
      {/* body */}
      <div className="h-full flex">
        <div
          className="w-[60px] hover:w-[200px] transition-all ease-in-out h-full flex flex-col justify-between bg-[#f7f7f7] z-10"
          onMouseEnter={() => setTimeout(() => setShowTabNames(true), 100)}
          onMouseLeave={() => setShowTabNames(false)}
        >
          <div className="flex flex-col">
            <div
              className={`${
                selectedTab === "user" && "bg-white"
              } h-[60px] relative hover:bg-white hover:cursor-pointer
          pt-5`}
              onClick={() => setSelectedTab("user")}
            >
              <UserManagementIcon
                className={`h-5 w-auto left-[30px] -translate-x-[50%]
                 absolute`}
              />
              {showTabNames && (
                <p className="absolute left-[50px] font-semibold tracking-wide whitespace-nowrap	">
                  User Management
                </p>
              )}
            </div>
            <div
              className={`${
                selectedTab === "text" && "bg-white"
              }  h-[60px] relative hover:bg-white hover:cursor-pointer
          pt-5`}
              onClick={() => setSelectedTab("text")}
            >
              <TextTaggerIcon
                className="h-5 w-auto left-[30px] -translate-x-[50%]
                 absolute"
              />
              {showTabNames && (
                <p className="absolute left-[50px] font-semibold tracking-wide whitespace-nowrap	">
                  Text Tagger
                </p>
              )}
            </div>

            <div
              className={`${
                selectedTab === "visual" && "bg-white"
              } h-[60px] relative hover:bg-white hover:cursor-pointer
          pt-5`}
              onClick={() => setSelectedTab("visual")}
            >
              <VisualTaggerIcon
                className="h-5 w-auto left-[30px] -translate-x-[50%]
                 absolute"
              />
              {showTabNames && (
                <p className="absolute left-[50px] font-semibold tracking-wide whitespace-nowrap	">
                  Visual Tagger
                </p>
              )}
            </div>
          </div>
          <div
            className={`${
              selectedTab === "logout" && "bg-white"
            } h-[60px] flex justify-center hover:bg-white hover:cursor-pointer`}
          >
            <Logout className="h-5 w-auto" />
          </div>
        </div>

        {selectedTab === "user" && (
          <div
            className={`${
              showTabNames && "bg-[#ACAAAC]"
            } absolute left-[60px] w-[calc(100%-60px)] h-full`}
          >
            <UserManagement />{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
