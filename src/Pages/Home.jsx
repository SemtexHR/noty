import BTmenu from "../components/Menu/Menu";
import "../Style.css";
import PageTitle from "../components/PageTitle/PageTitle";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-10">
        <div className="row-start-2">
          <PageTitle name="Home" />
        </div>
        <div className="pos">
          <BTmenu />
        </div>
      </div>
    </>
  );
};

export default Home;
