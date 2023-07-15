import React from "react";
import AuthHandler from "./AuthHandler";
import MainComponent from "../components/MainComponent";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
export var PrivateRouteNew=({page, activepage,...rest}) =>{
    return (

        <Route
            {...rest}
            render={(props) => AuthHandler.loggedIn() ? (<MainComponent page={page} activepage={activepage}{...props}/>): <Redirect to= "/"/>}
        /> )
};
