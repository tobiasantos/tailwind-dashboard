/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from "../ui/table";
import { fakeMeetings } from "../../constants/reunioesData";
import { useWindowDimensions } from "../../services/useWindowDimensions";
import { useEffect, useState } from "react";

export function ReunioesTable() {
  const { width } = useWindowDimensions();

  const [titleWidth, setTitleWidth] = useState(25);
  const [categoryWidth, setCategoryWidth] = useState(20);
  const [responsavelWidth, setResponsavelWidth] = useState(20);
  const [dataWidth, setDataWidth] = useState(15);
  const [duracaoWidth, setDuracaoWidth] = useState(20);
  const [duracaoSort, setDuracaoSort] = useState("");
  const [meetings, setMeetings] = useState(fakeMeetings);

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

  const getTimeByDuracao = (duracao) => {
    const [hours, minutes] = duracao.split(" ");
    const hoursClean = hours.replace("h", "");
    const minutesClean = minutes.replace("m", "");

    return parseInt(hoursClean) * 60 + parseInt(minutesClean);
  };

  useEffect(() => {
    const auxMeetings = [...fakeMeetings];
    if (duracaoSort === "asc") {
      setMeetings(
        auxMeetings.sort((a, b) => {
          return getTimeByDuracao(a.duracao) - getTimeByDuracao(b.duracao);
        })
      );
    } else if (duracaoSort === "desc") {
      setMeetings(
        auxMeetings.sort((a, b) => {
          return getTimeByDuracao(b.duracao) - getTimeByDuracao(a.duracao);
        })
      );
    } else {
      setMeetings(auxMeetings);
    }
  }, [duracaoSort]);

  return (
    <Table.Root>
      <Table.Summary title={"Reuniões"}></Table.Summary>
      <Table.Content>
        <Table.Head>
          <Table.TH text="Título" width={titleWidth}></Table.TH>
          {width > 768 && (
            <Table.TH text="Categoria" width={categoryWidth}></Table.TH>
          )}
          {width > 768 && (
            <Table.TH text="Responsável" width={responsavelWidth}></Table.TH>
          )}
          <Table.TH text="Data" width={dataWidth}></Table.TH>
          {width > 1024 && (
            <Table.TH
              text="Duração"
              width={duracaoWidth}
              duracaoSort={duracaoSort}
              setDuracaoSort={setDuracaoSort}
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
    </Table.Root>
  );
}
