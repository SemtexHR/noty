import BTmenu from "../components/Menu/Menu";
import "../Style.css";
import PageTitlenoCal from "../components/PageTitle/PageTitle";
import BackgroundCircles from "../assets/MainBackground.svg";

function changeTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

const Settings = () => {

  const handleThemeChange = (event) => {
    changeTheme(event.target.value);
    localStorage.setItem("theme", event.target.value);
  }
  return (
    <>
      <div className="relative grid grid-cols-3 grid-rows-10">
        <div className="row-start-2">
          <PageTitlenoCal name="Settings" />
        </div>
        <div className="row-start-3">
          <select name="ka" onChange={handleThemeChange}>
            <option value="root">(N)oty_Base</option>
            <option value="brat">Brat</option>
            <option value="positions" >Positions</option>
            <option value="mono">mono</option>
            <option value="Cat">Catpuccin Frapee</option>
            <option value="Moc">Catpuccin Mocha</option>
            <option value="Luna">Luna Theme</option>
          </select>
        </div>
        <div className="pos">
          <BTmenu />
        </div>
      </div>
    </>
  );
};

export default Settings;
