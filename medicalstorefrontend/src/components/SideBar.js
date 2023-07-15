import React from "react";
import usericon from "adminbsb-materialdesign/images/user.png";
import Config from "../utils/Config";
import { Link } from 'react-router-dom';


class SideBar extends React.Component {

    state = {
        signOutMenuClass: "btn-group user-helper-dropdown",
    }

    signOutMenuClick = () => {
        if (this.state.signOutMenuClass == "btn-group user-helper-dropdown") {
            this.setState({ signOutMenuClass: "btn-group user-helper-dropdown open" });
        }
        else {
            this.setState({ signOutMenuClass: "btn-group user-helper-dropdown" });
        }
    }

    constructor(props) {
        super(props);
        this.divref = React.createRef();
        this.divref2 = React.createRef();
    }

    componentWillMount() {
        document.addEventListener("mousedown", this.handleMouseClick, false)
    }
    componentWillUnmount() {
        document.addEventListener("mousedown", this.handleMouseClick, false)
    }
    handleMouseClick = (event) => {
        console.log("ok")
        if (event.target == this.divref.current || event.target == this.divref2.current) {
            return;
        }
        else {
            this.setState({ signOutMenuClass: "btn-group user-helper-dropdown" });
        }
    }

    render() {
        return (
            <>
                <section>
                    <aside id="leftsidebar" className="sidebar"  style={{overflowY:"auto"}}>
                        <div className="user-info">
                            <div className="image">
                                <img src={usericon} width="48" height="48" alt="User" />
                            </div>
                            <div className="info-container">
                                <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ibrahim Nazir</div>
                                <div className="email">ibrahim.nazir@example.com</div>
                                <div className={this.state.signOutMenuClass} onClick={this.signOutMenuClick}>
                                    <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" ref={this.divref}>keyboard_arrow_down</i>
                                    <ul className="dropdown-menu pull-right">  
                                        <li><a href={Config.logoutPageUrl} className=" waves-effect waves-block" ref={this.divref2}><i className="material-icons"  >input</i>Sign Out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="menu">
                            <div className="slimScrollDiv" style={{ position: "relative", overflow: "auto", width: "auto", height: "auto" }}>
                                <ul className="list" style={{ overflow: "auto", width: "auto" }}>
                                    {/* <li className="header">MAIN NAVIGATION</li> */}
                                    {Config.sidebarItem.map(
                                        (item) => 
                                        <li key={item.index} className={item.index == this.props.activepage ? "active" : ""}>
                                            <Link to={item.url} className="toggled waves-effect waves-block">
                                                <i className="material-icons">{item.icons}</i>
                                                <span>{item.title}</span>
                                                <hr/>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                                <div className="slimScrollBar" style={{ background: "rgba(0, 0, 0, 0.5)", width: "4px", position: "absolute", top: "0px", opacity: "0.4", display: "none", borderRadius: "0px", zIndex: "99", right: "1px", height: "auto" }}>
                                </div>
                                <div className="slimScrollRail" style={{ width: "4px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "0px", background: "rgb(51, 51, 51)", opacity: "0.2", zIndex: "90", right: "1px" }}>
                                </div>
                            </div>
                            <div className="legal">
                                <div className="copyright">
                                    © <a href="#">UKIA - Software Developers</a>
                                </div>
                                
                            </div>
                        </div>
                    </aside >
                </section >
            </>)
    }
}
export default SideBar;