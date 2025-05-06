import BTmenu from "../components/Menu/Menu";
import PageTitleNoC from "../components/PageTitle/PageTitlenoCal";
import Tiptap from "../components/TipTap/TipTap";

const Notes = () => {
  return (
    <>
      <div className=" relative grid grid-cols-3 grid-rows-10">
        <div className="row-start-2">
          <PageTitleNoC name="Notes" />
        </div>

        <div className="col-start-2 row-start-2 absolute">
          <Tiptap />
        </div>

        <div className="pos">
        <BTmenu />
        </div>
        
      </div>
    </>
  );
};

export default Notes;
