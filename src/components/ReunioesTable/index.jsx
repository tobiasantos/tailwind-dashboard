import { Table } from "../ui/table";
import { useWindowDimensions } from "../../services/useWindowDimensions";
import { useEffect, useState } from "react";
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

  const [titleWidth, setTitleWidth] = useState(25);
  const [categoryWidth, setCategoryWidth] = useState(20);
  const [responsavelWidth, setResponsavelWidth] = useState(20);
  const [dataWidth, setDataWidth] = useState(15);
  const [duracaoWidth, setDuracaoWidth] = useState(20);

  useEffect(() => {
    if (width > 1024) {
      setTitleWidth(30);
      setCategoryWidth(25);
      setResponsavelWidth(15);
      setDataWidth(15);
      setDuracaoWidth(15);
    } else if (width > 768) {
      setTitleWidth(30);
      setCategoryWidth(30);
      setResponsavelWidth(15);
      setDataWidth(25);
    } else {
      setTitleWidth(60);
      setDataWidth(40);
    }
  }, [width]);

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
          <Table.TH text="Título" width={titleWidth}></Table.TH>
          {width > 768 && (
            <Table.TH text="Categoria" width={categoryWidth}></Table.TH>
          )}
          {width > 768 && (
            <Table.TH text="Responsável" width={responsavelWidth}></Table.TH>
          )}
          <Table.TH
            text="Data"
            width={dataWidth}
            sortValue={dataSort}
            setSortValue={setDataSort}
            resetConcurrentSort={() => setDuracaoSort("")}
          ></Table.TH>
          {width > 1024 && (
            <Table.TH
              text="Duração"
              width={duracaoWidth}
              sortValue={duracaoSort}
              setSortValue={setDuracaoSort}
              resetConcurrentSort={() => setDataSort("")}
            ></Table.TH>
          )}
        </Table.Head>
        <Table.Body>
          {meetings.map((meeting, idx) => (
            <Table.Row key={meeting.id} isGray={idx % 2 === 1}>
              <Table.TD text={meeting.title}>
                <span className="font-medium">{meeting.title}</span>
              </Table.TD>
              {width > 768 && <Table.TD text={meeting.categoria}></Table.TD>}
              {width > 768 && <Table.TD text={meeting.responsavel}></Table.TD>}
              <Table.TD text={meeting.data}></Table.TD>
              {width > 1024 && <Table.TD text={meeting.duracao}></Table.TD>}
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
