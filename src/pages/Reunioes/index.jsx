import { ReunioesInfo } from "../../components/ReunioesInfo";
import { ReunioesTable } from "../../components/ReunioesTable";
import "../../styles/reunioesPage.css";

export function ReunioesPage() {
  return (
    <div className="meet-page-wrapper">
      <div className="border-b mb-10">filtros</div>
      <div className="mb-8 flex flex-col gap-2">
        {/* <h1 className="text-2xl font-bold">Dados gerais</h1> */}
        <ReunioesInfo />
      </div>
      <div className="h-full">
        <ReunioesTable />
      </div>
    </div>
  );
}
