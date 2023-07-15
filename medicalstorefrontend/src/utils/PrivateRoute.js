import React from "react";
import AuthHandler from "./AuthHandler";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
export var PrivateRoute=({component:Component, ...rest}) =>{
    return (<Route
    {...rest}
    render={(props) => AuthHandler.loggedIn() ? (<Component {...props}/>): <Redirect to= "/"/>}
    /> )
};
