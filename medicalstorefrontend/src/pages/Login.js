import React from 'react';
import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css"
import "adminbsb-materialdesign/plugins/node-waves/waves.css"
import "adminbsb-materialdesign/plugins/animate-css/animate.css"
import "adminbsb-materialdesign/css/style.css"
import AuthHandler from '../utils/AuthHandler';
import Config from '../utils/Config';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        btnDisabled: true,
        loginStatus: 0
    }
    saveInputs = (event) => {
        var key = event.target.name;
        this.setState({ [key]: event.target.value });
        if (this.username != "" && this.password != "") {
            this.setState({ btnDisabled: false })

        }
        else {
            this.setState({ btnDisabled: true })

        }

    }

    formSubmit = (event) => {
        event.preventDefault();
        this.setState({ loginStatus: 1 });
        console.log(this.state);
        AuthHandler.login(this.state.username, this.state.password, this.handleAjaxResponse);

    };
    handleAjaxResponse = (data) => {
        console.log(data)
        if (data.error) {
            this.setState({ loginStatus: 4 });
        }
        else {
            this.setState({ loginStatus: 3 });
            window.location = Config.homeUrl
        }
    };

    getMessage = () => {
        if (this.state.loginStatus === 1) {
            return "";
        }
        if (this.state.loginStatus === 1) {
            return (<div class="alert alert-success">
                <strong>Logging in!</strong>Please wait...
            </div>)
        }
        if (this.state.loginStatus === 3) {

            return (<div class="alert alert-success">
                <strong>Logging Successful!</strong>
            </div>)

        }
        if (this.state.loginStatus === 4) {
            return (<div class="alert alert-danger">
                <strong>Invalid Login Detail</strong></div>)
        }
    }

    render() {

        if (AuthHandler.loggedIn()){
            return <Redirect to={Config.homeUrl} />
        }

        document.body.className = "login-page";

        return (

            <React.Fragment>

                <div className="login-box" >
                    <div className="logo" >
                        <a href="#">Tibb<b>Khana</b></a>
                        <small>Drug Store Management Software</small>
                    </div>
                    <div className="card">
                        <div className="body">
                            <form id="sign_in" method="POST" onSubmit={this.formSubmit}>
                                <div className="msg">Sign in</div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">person</i>
                                    </span>
                                    <div className="form-line">
                                        <input type="text" className="form-control" name="username" placeholder="Username" required autofocus onChange={this.saveInputs} />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">lock</i>
                                    </span>
                                    <div className="form-line">
                                        <input type="password" className="form-control" name="password" placeholder="Password" required onChange={this.saveInputs} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-8 p-t-5">
                                        <input type="checkbox" name="rememberme" id="rememberme" className="filled-in chk-col-pink" />
                                        <label for="rememberme">Remember Me</label>
                                    </div>
                                    <div className="col-xs-4">
                                        <button className="btn btn-block bg-pink waves-effect" type="submit" disabled={this.btnDisabled}>SIGN IN</button>
                                    </div>
                                </div>
                                <div className="row m-t-15 m-b--20">
                                    <div className="col-xs-6">
                                        <a href="sign-up.html">Register Now!</a>
                                    </div>
                                    <div className="col-xs-6 align-right">
                                        <a href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                </div>
                                {this.getMessage()}
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment >)
    }
}
export default Login;