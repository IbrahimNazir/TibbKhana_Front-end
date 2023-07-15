import React from 'react';
import OverLay from './OverLay';
import NavBar from './NavBar';
// import HomeComponent from '../pages/CompanyComponent'; 
import SideBar from './SideBar';
import "adminbsb-materialdesign/css/themes/all-themes.css";
import PageLoader from './PageLoader';




class MainComponent extends React.Component{

    
    state = {
        bodyClass : "theme-red ls-closed",
        displayOverlay: "none",
        width:window.screen.width,
        // signOutMenuClass:"btn-group user-helper-dropdown",
        
    }
    onBarClick=()=>{
        if(this.state.bodyClass==="theme-red ls-closed"){
            this.setState({bodyClass:"theme-red ls-closed overlay-open"});
            this.setState({displayOverlay:"block"})

        }
        else if (this.state.bodyClass==="theme-red ls-closed overlay-open"){
            this.setState({bodyClass:"theme-red ls-closed"});
            this.setState({displayOverlay:"none"})

        }
    }

    // signOutMenuClick=()=>{
    //     if(this.state.signOutMenuClass=="btn-group user-helper-dropdown"){
    //         this.setState({signOutMenuClass:"btn-group user-helper-dropdown open"});
    //     }
    //     else{
    //         this.setState({signOutMenuClass:"btn-group user-helper-dropdown"});
    //     }
    // }

    onscreenresize=()=>{
        console.log(window.screen.width)
        this.setState({width:window.screen.width})
    }

    componentWillMount(){
        window.addEventListener("resize", this.onscreenresize )
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.onscreenresize )
    }
    componentDidMount(){
        var inputall = document.querySelectorAll("input")
        inputall.forEach((input)=>{
            input.addEventListener("focus", function(){
                this.parentNode.className="form-line focused"
            })
        })
        inputall.forEach((input)=>{
            input.addEventListener("blur", function(){
                this.parentNode.className="form-line"
            })
        })
    }

    render(){
        if (this.state.width >= 1170){
            document.getElementById("root").className = "theme-red";
        }
        else{
            document.getElementById("root").className = this.state.bodyClass;

        }
        var Page = this.props.page
        return (
            <React.Fragment>
                <PageLoader/> 
                <OverLay display={this.state.displayOverlay}/>
                <NavBar onBarClick={this.onBarClick}/>
                <SideBar activepage={this.props.activepage} classNameSignOutMenu = {this.state.signOutMenuClass} signOutMenu={this.signOutMenuClick}/>
                <Page {...this.props}/>
            </React.Fragment>
        )
    }
}
export default MainComponent;