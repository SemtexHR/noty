import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import "../../Style.css";

export default function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <TopBar />
      <div className="flex-1 overflow-auto h-max">
        <Outlet />
      </div>
    </div>
  );
}
