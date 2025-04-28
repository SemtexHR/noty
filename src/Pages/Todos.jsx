import BTmenu from "../components/Menu/Menu";
import PageTitleNoC from "../components/PageTitle/PageTitlenoCal";

const Todo = () => {
    return (
        <>
          <div className="grid grid-cols-3  grid-rows-10">
            <div className="row-start-2 ">
              <PageTitleNoC name="To-Dos" />
            </div>
            <div className="pos">
            <BTmenu />
            </div>
            
          </div>
        </>
      );
}

export default Todo;