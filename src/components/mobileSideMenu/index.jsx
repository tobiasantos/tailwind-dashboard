import { LibraryLogo } from "../../svg/library";
import { RocketLogo } from "../../svg/rocket";
import { TeamLogo } from "../../svg/team";
import { ToolsLogo } from "../../svg/tools";
import logo from "../../assets/elephan-logo.png";
import userPic from "../../assets/user-pic.jpeg";
import { ToolTipLogo } from "../../svg/toolTip";
import { useState } from "react";
import { ToolTipMessage } from "../toolTip";
import "../../styles/sideMenu.css";
import { CloseLogo } from "../../svg/close";

export function MobileSideMenu({
  currentPage,
  setCurrentPage,
  isOpen,
  setIsOpen,
}) {
  const [toolTipVisible, setToolTipVisible] = useState(false);

  const sideMenuClassName = isOpen
    ? "fixed w-[300px] top-0 h-screen w-72 p-3 shadow-xl bg-white z-50 transition-all ease-in-out duration-300"
    : "fixed w-[80px] top-0 h-screen w-72 p-3 shadow-xl bg-white z-50 transition-all ease-in-out duration-300";

  return (
    <div className={sideMenuClassName}>
      <div className="flex justify-between items-center mb-10 ">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full p-2 border-[#6cbab1] border"
        >
          <img src={logo} alt="logo" className="w-10 h-10" />
        </div>
        {isOpen && (
          <button onClick={() => setIsOpen(false)}>
            <CloseLogo color={"#6FBFB6"} size={24} />
          </button>
        )}
      </div>
      <div className="relative h-full ">
        <ul className="flex flex-col gap-8 mb-28">
          <li
            className={`side-menu-item-mobile ${
              currentPage === "reunioes" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("reunioes")}
          >
            <div>
              <RocketLogo
                color={currentPage === "reunioes" ? "#fff" : "#6FBFB6"}
                size={24}
              />
            </div>
            <span>Reuniões</span>
          </li>
          <li
            className={`side-menu-item-mobile ${
              currentPage === "time" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("time")}
          >
            <div>
              <TeamLogo
                color={currentPage === "time" ? "#fff" : "#6FBFB6"}
                size={24}
              />
            </div>
            <span>Time</span>
          </li>
          <li
            className={`side-menu-item-mobile ${
              currentPage === "biblioteca" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("biblioteca")}
          >
            <div>
              <LibraryLogo
                color={currentPage === "biblioteca" ? "#fff" : "#6FBFB6"}
                size={24}
              />
            </div>
            <span>Biblioteca</span>
          </li>
          <li
            className={`side-menu-item-mobile ${
              currentPage === "integracao" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("integracao")}
          >
            <div>
              <ToolsLogo
                color={currentPage === "integracao" ? "#fff" : "#6FBFB6"}
                size={24}
              />
            </div>
            <span>Integrações</span>
          </li>
        </ul>
        <div className="flex gap-3">
          <div
            className="cursor-pointer relative ml-2"
            onClick={() => setToolTipVisible((prev) => !prev)}
          >
            <ToolTipLogo color={"#6FBFB6"} size={24} />
            {toolTipVisible && (
              <>
                <ToolTipMessage
                  isMobile={true}
                  message={
                    "Explore nossa documentação para encontrar soluções e guias passo a passo."
                  }
                />
                <div className="absolute z-40 w-screen h-screen"></div>
              </>
            )}
          </div>
          {isOpen && (
            <span onClick={() => setToolTipVisible((prev) => !prev)}>
              Dúvidas
            </span>
          )}
        </div>
        <a
          className="absolute bottom-[20%] flex gap-3 items-center"
          target="_blank"
          href="https://github.com/tobiasantos"
          rel="noreferrer"
        >
          <img
            src={userPic}
            alt="foto de perfil"
            className="w-10 rounded-full ml-2 object-fill"
          />
          {isOpen && <span>Tobias Santos</span>}
        </a>
      </div>
    </div>
  );
}
