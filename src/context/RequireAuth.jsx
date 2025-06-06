import {Navigate,Outlet,useLocation} from "react-router-dom";
import { usePocket } from "./PocketContext";

export const RequireAuth = () =>{
    const { user } = usePocket();
    const location = useLocation();

    if(!user){
        return (<Navigate to={{pathname: "/home"}} state={{location}} replace/>);
    }

    return <Outlet/>;
}