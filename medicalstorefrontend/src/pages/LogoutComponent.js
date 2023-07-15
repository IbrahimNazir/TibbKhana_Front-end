import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import AuthHandler from "../utils/AuthHandler";

class LogoutComponent extends React.Component{
    render(){
        AuthHandler.logoutUser(); 
        return <Redirect to="/"/>
    }
}
export default LogoutComponent;