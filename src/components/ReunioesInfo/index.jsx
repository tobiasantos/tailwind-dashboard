import "../../styles/cardItem.css";
import { MeetingsLogo } from "../../svg/meetings";
import { CategoriesLogo } from "../../svg/categories";
import { TimeLogo } from "../../svg/time";

export function ReunioesInfo({ meetings, totalMeetings }) {
  const getTotalMeetings = () => {
    return totalMeetings;
  };

  const getMostFrequentCategory = () => {
    const categories = meetings.map((meeting) => meeting.categoria);
    const categoriesCount = categories.reduce((acc, category) => {
      if (!acc[category]) {
        acc[category] = 1;
      } else {
        acc[category] += 1;
      }
      return acc;
    }, {});

    const mostFrequentCategory = Object.entries(categoriesCount).reduce(
      (acc, [category, count]) => {
        if (count > acc.count) {
          acc = { category, count };
        }
        return acc;
      },
      { category: "", count: 0 }
    );

    return mostFrequentCategory.category || "Nenhuma categoria";
  };

  const getAverageDuration = () => {
    const totalDuration = meetings.reduce((acc, meeting) => {
      const [hours, minutes] = meeting.duracao.split(" ");
      const hoursClean = hours.replace("h", "");
      const minutesClean = minutes.replace("m", "");

      return acc + parseInt(hoursClean) * 60 + parseInt(minutesClean);
    }, 0);

    const averageDuration = totalDuration / meetings.length;
    const formattedHours = Math.floor(averageDuration / 60);
    const formattedMinutes = Math.floor(averageDuration % 60);

    return averageDuration > 60
      ? `${formattedHours || 0}h ${formattedMinutes || 0}m`
      : `${formattedMinutes || 0}m`;
  };

  const getTotalDuration = () => {
    const totalDuration = meetings.reduce((acc, meeting) => {
      const [hours, minutes] = meeting.duracao.split(" ");
      const hoursClean = hours.replace("h", "");
      const minutesClean = minutes.replace("m", "");

      return acc + parseInt(hoursClean) * 60 + parseInt(minutesClean);
    }, 0);

    const hours = Math.floor(totalDuration / 60);
    const minutes = totalDuration % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-flow-row">
      <div className="card-item">
        <div className="flex items-center gap-1">
          <MeetingsLogo color={"#6cbab1"} size={18} />
          <h5>Total de reuniões</h5>
        </div>
        <span>{getTotalMeetings()}</span>
      </div>
      <div className="card-item">
        <div className="flex items-center gap-1">
          <TimeLogo color={"#6cbab1"} size={18} />
          <h5>Média de duração</h5>
        </div>
        <span>{getAverageDuration()}</span>
      </div>
      <div className="card-item">
        <div className="flex items-center gap-1">
          <TimeLogo color={"#6cbab1"} size={18} />
          <h5>Duração total das reuniões</h5>
        </div>
        <span>{getTotalDuration()}</span>
      </div>
      <div className="card-item">
        <div className="flex items-center gap-1">
          <CategoriesLogo color={"#6cbab1"} size={18} />
          <h5>Categoria mais frequente</h5>
        </div>
        <span>{getMostFrequentCategory()}</span>
      </div>
    </div>
  );
}
