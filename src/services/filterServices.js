export const getMeetsByPage = (perPage, page, meetings) => {
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return meetings.slice(start, end);
};

const getTimeByDuracao = (duracao) => {
  const [hours, minutes] = duracao.split(" ");
  const hoursClean = hours.replace("h", "");
  const minutesClean = minutes.replace("m", "");

  return parseInt(hoursClean) * 60 + parseInt(minutesClean);
};

const sortMeetingsByDuracao = (meetings, sort) => {
  const auxMeetings = [...meetings];
  if (sort === "asc") {
    return auxMeetings.sort((a, b) => {
      return getTimeByDuracao(a.duracao) - getTimeByDuracao(b.duracao);
    });
  } else {
    return auxMeetings.sort((a, b) => {
      return getTimeByDuracao(b.duracao) - getTimeByDuracao(a.duracao);
    });
  }
};

const compareStringDates = (a, b) => {
  const [dayA, monthA, yearA] = a.data.split("/");
  const [dayB, monthB, yearB] = b.data.split("/");

  const dateA = new Date(yearA, monthA - 1, dayA);
  const dateB = new Date(yearB, monthB - 1, dayB);

  return dateA - dateB;
};

const sortMeetingsByData = (meetings, sort) => {
  const auxMeetings = [...meetings];
  if (sort === "asc") {
    return auxMeetings.sort((a, b) => compareStringDates(a, b));
  } else {
    return auxMeetings.sort((a, b) => compareStringDates(b, a));
  }
};

export const sortMeetings = (meetings, sort, type) => {
  if (type === "duracao") {
    return sortMeetingsByDuracao(meetings, sort);
  } else if (type === "data") {
    return sortMeetingsByData(meetings, sort);
  } else {
    return meetings;
  }
};

const filterByTitle = (meetings, title) => {
  if (!title) return meetings;
  return meetings.filter((meeting) =>
    meeting.title.toLowerCase().includes(title.toLowerCase())
  );
};

const filterByCategory = (meetings, categories) => {
  if (categories.length === 0) return meetings;
  return meetings.filter((meeting) =>
    categories.some((category) => meeting.categoria.includes(category))
  );
};

const filterByResponsible = (meetings, responsibles) => {
  if (responsibles.length === 0) return meetings;
  return meetings.filter((meeting) =>
    responsibles.some((responsible) =>
      meeting.responsavel.includes(responsible)
    )
  );
};

export const filterMeetings = (meetings, title, categories, responsibles) => {
  let auxMeetings = [...meetings];
  auxMeetings = filterByTitle(auxMeetings, title);
  auxMeetings = filterByCategory(auxMeetings, categories);
  auxMeetings = filterByResponsible(auxMeetings, responsibles);

  return auxMeetings;
};
