import { useState } from "react";
import { SideMenu } from "../../components/sideMenu";
import { NotFoundPage } from "../404";
import { ReunioesPage } from "../Reunioes";

export function HomePage() {
  const [currentPage, setCurrentPage] = useState("reunioes");

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

  return (
    <div className="flex gap-4">
      <div className="flex-none w-[20%] h-screen">
        <SideMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      <div className="grow">{getContent(currentPage)}</div>
    </div>
  );
}
