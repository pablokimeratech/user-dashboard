import { useState } from "react";
import NavBar from "./NavBar";
import UserManagement from "./UserManagement";
import TextTagger from "./TextTagger";

export default function Body() {
  const [selectedTab, setSelectedTab] = useState("text");
  const [showTabNames, setShowTabNames] = useState(false);
  return (
    <div className="h-full flex">
      <NavBar
        selectedTab={selectedTab}
        showTabNames={showTabNames}
        setSelectedTab={setSelectedTab}
        setShowTabNames={setShowTabNames}
      />

      {selectedTab === "user" && (
        <div
          className={`${
            showTabNames && "bg-[#ACAAAC]"
          } absolute left-[60px] w-[calc(100%-60px)] h-full`}
        >
          <UserManagement />{" "}
        </div>
      )}
      {selectedTab === "text" && (
        <div
          className={`${
            showTabNames && "bg-[#ACAAAC]"
          } absolute left-[60px] w-[calc(100%-60px)] h-full`}
        >
          <TextTagger />{" "}
        </div>
      )}
    </div>
  );
}
