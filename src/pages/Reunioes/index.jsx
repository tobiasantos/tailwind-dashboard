import { ReunioesInfo } from "../../components/ReunioesInfo";
import { ReunioesTable } from "../../components/ReunioesTable";

export function ReunioesPage() {
  return (
    <div className="max-h-[100vh] overflow-hidden p-4">
      <h1 className="text-2xl font-bold">Dados gerais</h1>
      <div className="mb-10">
        <ReunioesInfo />
      </div>
      <div>
        <ReunioesTable />
      </div>
    </div>
  );
}
