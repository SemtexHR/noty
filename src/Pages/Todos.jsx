import BTmenu from "../components/Menu/Menu";
import PageTitleNoC from "../components/PageTitle/PageTitlenoCal";
import ToDo from "../components/ToDo/ToDo"

const Todo = () => {
    return (
        <>
          <div className="grid grid-cols-3  grid-rows-10">
            <div className="row-start-2 ">
              <PageTitleNoC name="To-Dos" />
            </div>
              <div className="col-end-3 row-start-3 relative">
                  <ToDo />
              </div>
            <div className="pos">
            <BTmenu />
            </div>

          </div>
        </>
      );
}

export default Todo;