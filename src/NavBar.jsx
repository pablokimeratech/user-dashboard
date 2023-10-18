//Images
import VisualTaggerIcon from "./assets/visual-tagger.svg?react";
import TextTaggerIcon from "./assets/text-tagger.svg?react";
import UserManagementIcon from "./assets/user-management.svg?react";
import Logout from "./assets/logout.svg?react";

export default function NavBar({
  selectedTab,
  showTabNames,
  setSelectedTab,
  setShowTabNames,
}) {
  return (
    <div
      className=" w-[60px] hover:w-[210px] transition-all ease-in-out h-full flex flex-col justify-between bg-[#454B59] z-10"
      onMouseEnter={() => setTimeout(() => setShowTabNames(true), 100)}
      onMouseLeave={() => setShowTabNames(false)}
    >
      <div className="flex flex-col">
        <div
          className={`${
            selectedTab === "user" && "bg-[#30343E]"
          } h-[60px] relative hover:bg-[#30343E] hover:cursor-pointer
        pt-5`}
          onClick={() => setSelectedTab("user")}
        >
          <UserManagementIcon
            className={`h-5 w-auto fill-white left-[30px] -translate-x-[50%]
               absolute`}
          />
          {showTabNames && (
            <p className="absolute left-[50px] text-sm whitespace-nowrap text-white">
              User Management
            </p>
          )}
        </div>
        <div
          className={`${
            selectedTab === "text" && "bg-[#30343E]"
          }  h-[60px] relative hover:bg-[#30343E] hover:cursor-pointer
        pt-5`}
          onClick={() => setSelectedTab("text")}
        >
          <TextTaggerIcon
            className="h-5 w-auto fill-white left-[30px] -translate-x-[50%]
               absolute"
          />
          {showTabNames && (
            <p className="absolute text-sm left-[50px] text-white  whitespace-nowrap	">
              Text Tagger
            </p>
          )}
        </div>

        <div
          className={`${
            selectedTab === "visual" && "bg-[#30343E]"
          } h-[60px] relative hover:bg-[#30343E] hover:cursor-pointer
        pt-5`}
          onClick={() => setSelectedTab("visual")}
        >
          <VisualTaggerIcon
            className="h-5 w-auto fill-white left-[30px] -translate-x-[50%]
               absolute"
          />
          {showTabNames && (
            <p className="absolute text-sm left-[50px] text-white  whitespace-nowrap	">
              Visual Tagger
            </p>
          )}
        </div>
      </div>
      <div
        className={`${
          selectedTab === "logout" && "bg-[#30343E]"
        } h-[60px] mb-5 relative hover:bg-[#30343E] hover:cursor-pointer pt-5`}
      >
        <Logout
          stroke="#fffff"
          className="h-5 w-auto fill-white left-[30px] -translate-x-[50%] absolute"
        />
        {showTabNames && (
          <p className="absolute text-sm left-[50px] text-white  whitespace-nowrap	">
            Logout
          </p>
        )}
      </div>
    </div>
  );
}
