/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ReunioesInfo } from "../../components/ReunioesInfo";
import { ReunioesTable } from "../../components/ReunioesTable";
import { fakeMeetings } from "../../constants/reunioesData";
import "../../styles/reunioesPage.css";
import { Filters } from "../../components/filters";
import {
  filterMeetings,
  getMeetsByPage,
  sortMeetings,
} from "../../services/filterServices";

export function ReunioesPage() {
  const [meetings, setMeetings] = useState(fakeMeetings);
  const [titleFilter, setTitleFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [responsibleFilter, setResponsibleFilter] = useState([]);
  const [duracaoSort, setDuracaoSort] = useState("");
  const [dataSort, setDataSort] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalMeetings, setTotalMeetings] = useState(meetings.length);

  const filterProps = {
    titleFilter,
    setTitleFilter,
    categoryFilter,
    setCategoryFilter,
    responsibleFilter,
    setResponsibleFilter,
  };

  const reuniaoInfoProps = {
    meetings,
    totalMeetings,
  };

  const reuniaoTableProps = {
    meetings,
    setMeetings,
    page,
    setPage,
    perPage,
    setPerPage,
    duracaoSort,
    setDuracaoSort,
    dataSort,
    setDataSort,
    totalMeetings,
  };

  useEffect(() => {
    const data = filterMeetings(
      fakeMeetings,
      titleFilter,
      categoryFilter,
      responsibleFilter
    );
    const sortOrder = dataSort || duracaoSort;
    const sortType = dataSort ? "data" : "duracao";
    const sorttedData = sortMeetings(data, sortOrder, sortType);
    setTotalMeetings(sorttedData.length);
    const maxPage = Math.ceil(sorttedData.length / perPage);
    const currentPage = page <= maxPage ? page : 1;
    setPage(currentPage);
    const newMeetings = getMeetsByPage(perPage, currentPage, sorttedData);
    setMeetings(newMeetings);
  }, [
    titleFilter,
    categoryFilter.length,
    responsibleFilter.length,
    perPage,
    dataSort,
    duracaoSort,
    page,
  ]);

  return (
    <div className="meet-page-wrapper">
      <div className="w-full">
        <Filters {...filterProps} />
      </div>
      <div className="w-full">
        <ReunioesInfo {...reuniaoInfoProps} />
      </div>
      <div className="w-full mb-8">
        <ReunioesTable {...reuniaoTableProps} />
      </div>
    </div>
  );
}
