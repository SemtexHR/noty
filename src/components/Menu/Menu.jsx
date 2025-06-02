import { Link } from "react-router-dom";
import {CheckIcon} from "@heroicons/react/16/solid"
import "../../Style.css"


const BTmenu = () => {
  return (
    <div className=" fixed flex">
      <div className=" w-[366px] h-[95px] flex justify-evenly flex-rows rad transition-all bg-sec rounded-title drop lg:w-[732px]">
        <Link to="/">
          <button className="Mbtn rad">
            Home
          </button>
        </Link>
        <Link to="/notes">
          <button className="Mbtn rad">
            Notes
          </button>
        </Link>
        <Link to="/todo">
          <button className="Mbtn rad">
            To-do
          </button>
        </Link>
      </div>
    </div>
   
  );
};



export default BTmenu;
