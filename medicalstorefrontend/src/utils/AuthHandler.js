import axios from "axios";
import Config from "./Config"
import {reactLocalStorage} from 'reactjs-localstorage';
class AuthHandler{
    static login(username, password, callback){
        axios.post(Config.logginUrl,{username:username,password:password})
        .then(function(response){
            if (response.status===200){
                reactLocalStorage.set('token',response.data.access)
                reactLocalStorage.set('refresh',response.data.access)
                callback({error:false,message:"Login Successful"})
            };
        })
        .catch(function(error){
            callback({error:true,message:"Login Fail"})

        });
    }
    static loggedIn(){
        if(reactLocalStorage.get("token") && reactLocalStorage.get("refresh")){
            return true;
        }
        else{
            return false;
        }
    }
    static getLoginToken(){
        return reactLocalStorage.get("token")
    }

    static getRefreshToken(){
        return reactLocalStorage.get("refresh")
    }
     static logoutUser(){
        reactLocalStorage.remove("token")
        reactLocalStorage.remove("refresh")
     }
    static checkTokenExpiry() {
        var expire = false;
        var token = this.getLoginToken();
        var tokenArray = token.split(".");
        var jwt = JSON.parse(atob(tokenArray[1]));
        console.log(jwt.exp)
        console.log("******************************")
        console.log(Date.now())
        if (jwt.exp && Number.isFinite(jwt.exp)) {
          expire = jwt.exp * 1000.00005;
          console.log("expire",expire)
        } else {
          expire = false;
        }
    
        if (!expire) {
            
            return false;
        }
        // if (Date.now() <= expire){
        //     this.login(username, password, callback)
        //     console.log(reactLocalStorage.get("token"))}
        return Date.now() > expire;
      }
    
}

export default AuthHandler;
