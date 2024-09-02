import { Table } from "../ui/table";
import { useWindowDimensions } from "../../services/useWindowDimensions";
import { Pagination } from "../pagination";
import { PaginationSelect } from "../paginationSelect";

export function ReunioesTable({
  meetings,
  page,
  setPage,
  perPage,
  setPerPage,
  duracaoSort,
  setDuracaoSort,
  dataSort,
  setDataSort,
  totalMeetings,
}) {
  const { width } = useWindowDimensions();
  return (
    <Table.Root>
      <Table.Summary title={"Reuniões"}>
        <Pagination
          perPage={perPage}
          setPerPage={setPerPage}
          setPage={setPage}
          listLength={totalMeetings}
        />
      </Table.Summary>
      <Table.Content>
        <Table.Head>
          <Table.TH text="Título" width={30}></Table.TH>
          <Table.TH text="Categoria" width={25}></Table.TH>
          <Table.TH text="Responsável" width={15}></Table.TH>
          <Table.TH
            text="Data"
            width={15}
            sortValue={dataSort}
            setSortValue={setDataSort}
            resetConcurrentSort={() => setDuracaoSort("")}
          ></Table.TH>
          {width > 768 && (
            <Table.TH
              text="Duração"
              width={15}
              sortValue={duracaoSort}
              setSortValue={setDuracaoSort}
              resetConcurrentSort={() => setDataSort("")}
            ></Table.TH>
          )}
        </Table.Head>
        <Table.Body>
          {meetings.map((meeting, idx) => (
            <Table.Row key={meeting.id} isGray={idx % 2 === 1}>
              <Table.TD text={meeting.title}></Table.TD>
              <Table.TD text={meeting.categoria}></Table.TD>
              <Table.TD text={meeting.responsavel}></Table.TD>
              <Table.TD text={meeting.data}></Table.TD>
              {width > 768 && <Table.TD text={meeting.duracao}></Table.TD>}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Content>
      <PaginationSelect
        currentPage={page}
        setCurrentPage={setPage}
        maxPage={Math.ceil(totalMeetings / perPage)}
      />
    </Table.Root>
  );
}
