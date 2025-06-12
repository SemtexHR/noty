import BTmenu from "../components/Menu/Menu";
import "../Style.css";
import PageTitle from "../components/PageTitle/PageTitle";
import BackgroundCircles from "../assets/MainBackground.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-10 transition-all">
        <div className="row-start-2 col-span-full flex flex-col">
          <PageTitle name="Home" />
          <div className="w-full" />
          <div className="absolute top-20 right-10 drop rad">
            <Link to={"/set"}>
              <img
                src="https://picsum.photos/200"
                alt="Decorative"
                className="rad h-20 w-20 hover:brightness-120 transition-all"
              />
            </Link>
          </div>
        </div>
        <div className="pos">
          <BTmenu />
        </div>
      </div>
    </>
  );
};

export default Home;
