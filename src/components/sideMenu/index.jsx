import { LibraryLogo } from "../../svg/library";
import { RocketLogo } from "../../svg/rocket";
import { TeamLogo } from "../../svg/team";
import { ToolsLogo } from "../../svg/tools";
import logo from "../../assets/main-logo.png";
import userPic from "../../assets/user-pic.jpeg";
import "../../styles/sideMenu.css";
import { ToolTipLogo } from "../../svg/toolTip";
import { useState } from "react";
import { ToolTipMessage } from "../toolTip";

export function SideMenu({ currentPage, setCurrentPage }) {
  const [toolTipVisible, setToolTipVisible] = useState(false);

  return (
    <div className="h-full flex flex-col justify-start gap-6 p-6 border-r-gray-300 border relative">
      <img src={logo} alt="logo" className="w-[80%] object-contain" />
      <hr />
      <div className="flex flex-col justify-end h-[60vh]">
        <ul className="flex flex-col gap-2">
          <li
            className={`side-menu-item ${
              currentPage === "reunioes" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("reunioes")}
          >
            <RocketLogo color={"#6FBFB6"} />
            <span>Reuniões</span>
          </li>
          <li
            className={`side-menu-item ${
              currentPage === "time" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("time")}
          >
            <TeamLogo color={"#6FBFB6"} />
            <span>Time</span>
          </li>
          <li
            className={`side-menu-item ${
              currentPage === "biblioteca" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("biblioteca")}
          >
            <LibraryLogo color={"#6FBFB6"} />
            <span>Biblioteca</span>
          </li>
          <li
            className={`side-menu-item ${
              currentPage === "integracao" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("integracao")}
          >
            <ToolsLogo color={"#6FBFB6"} />
            <span>Integrações</span>
          </li>
        </ul>
        <div className="grow flex gap-3 pl-4 justify-between items-end">
          Precisa de ajuda ?
          <div
            className="cursor-pointer relative"
            onMouseEnter={() => setToolTipVisible(true)}
            onMouseLeave={() => setToolTipVisible(false)}
          >
            <ToolTipLogo color={"#6FBFB6"} size={"24px"} />
            {toolTipVisible && (
              <ToolTipMessage
                message={
                  "Explore nossa documentação para encontrar soluções e guias passo a passo."
                }
              />
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex gap-3 items-center pb-4">
        <img
          src={userPic}
          alt="foto de perfil"
          className="max-w-[12%] rounded-full"
        />
        <span>Tobias Santos</span>
      </div>
    </div>
  );
}
