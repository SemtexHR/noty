import "../../Style.css";
import { useState } from "react";

function getDate() {
  const Daten = [
    "Jän",
    "Feb",
    "März",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Okt",
    "Nov",
    "Dez",
  ];

  const today = new Date();
  const Mounth = today.getMonth();
  const day = today.getDate();
  return Daten[Mounth] + " " + day;
}

export default function PageTitle({ name }) {
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <div className="bg-sec w-[447px] h-[89px] rad-bar flex justify-between items-center drop transition-all  max-md:w-2xs  ">
      <div className="h-[89px] bg-main w-[33px] rad-bar" />
      <div className="flex items-end gap-2">
        <h1 className="font-Poppins text-text text-6xl  max-md:text-3xl transition-all leading-none">
          {name}
        </h1>
        <div className="w-0.5" />
        <p className="font-JetBrains text-text/25 text-2xl">{currentDate}</p>
      </div>
      <div/>
    </div>
  );
}
