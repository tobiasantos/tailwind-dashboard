import { useState } from "react";
import { SideMenu } from "../../components/sideMenu";
import { NotFoundPage } from "../404";
import { ReunioesPage } from "../Reunioes";
import { MobileSideMenu } from "../../components/mobileSideMenu";
import { useWindowDimensions } from "../../services/useWindowDimensions";

export function HomePage() {
  const [currentPage, setCurrentPage] = useState("reunioes");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { width } = useWindowDimensions();

  const getContent = (currentPage) => {
    switch (currentPage) {
      case "reunioes":
        return <ReunioesPage />;
      // case 'time':
      //   return <TimePage />
      // case 'biblioteca':
      //   return <BibliotecaPage />
      // case 'Integracoes':
      //   return <integracoesPage />
      default:
        return <NotFoundPage />;
    }
  };

  const isMobile = width <= 1024;

  const sideMenuWrapperClassName = isMobile
    ? "relative"
    : "flex-none w-[330px] relative";

  const contentWrapperClassName = isMobile
    ? "min-w-[70%] sm:w-full flex justify-center mt-4 mr-[16px] ml-[96px]"
    : "grow flex justify-center mt-4 ";
  return (
    <div className="flex lg:gap-4">
      <div className={sideMenuWrapperClassName}>
        {!isMobile ? (
          <SideMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
        ) : (
          <MobileSideMenu
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isOpen={mobileMenuOpen}
            setIsOpen={setMobileMenuOpen}
          />
        )}
      </div>
      <div className={contentWrapperClassName}>{getContent(currentPage)}</div>
    </div>
  );
}
