import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainComponent from "./components/MainComponent";
import { PrivateRouteNew } from './utils/PrivateRouteNew';
import HomeComponent from './pages/HomeComponent';
import CompanyComponent from './pages/CompanyComponent';
import CompanyDetailsComponent from './pages/CompanyDetailsComponent';
import LogoutComponent from './pages/LogoutComponent';
import Config from './utils/Config';
import CompanyAddBankComponent from './pages/CompanyAddBankComponent';
import CompanyEditBankComponent from './pages/CompanyEditBankComponent';
import MedicineAddComponent from './pages/MedicineAddComponent';
import MedicineManageComponent from './pages/MedicineManageComponent';
import CompanyAccountComponent from './pages/CompanyAccountComponent';
import EmployeeComponent from './pages/EmployeeComponent';
import EmployeeDetailsComponent from './pages/EmployeeDetailsComponent';
import BillGenerateComponent from './pages/BillGenerateComponent';
import CustomerRequestComponent from './pages/CustomerRequestComponent';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path={Config.logoutPageUrl} component={LogoutComponent}></Route>
      <PrivateRouteNew exact path="/home" activepage="0" page={HomeComponent} />
      <PrivateRouteNew exact path="/company" activepage="1" page={CompanyComponent}/>
      <PrivateRouteNew exact path="/companydetails/:id" activepage="1" page={CompanyDetailsComponent}/>
      <PrivateRouteNew exact path="/addCompanyBank/:id" activepage="1" page={CompanyAddBankComponent}/>
      <PrivateRouteNew
        exact
        path="/editcompanybank/:company_id/:id"
        activepage="1"
        page={CompanyEditBankComponent}
      ></PrivateRouteNew>
      <PrivateRouteNew
        exact
        path="/addMedicine"
        activepage="3"
        page={MedicineAddComponent}
      ></PrivateRouteNew>
      <PrivateRouteNew
        exact
        path="/manageMedicine"
        activepage="4"
        page={MedicineManageComponent}
      ></PrivateRouteNew>
      <PrivateRouteNew
        exact
        path="/manageCompanyAccount"
        activepage="2"
        page={CompanyAccountComponent}
      ></PrivateRouteNew>
      <PrivateRouteNew
        exact
        path="/employeeManage"
        activepage="6"
        page={EmployeeComponent}
      ></PrivateRouteNew>
      <PrivateRouteNew
        exact
        path="/employeedetails/:id"
        activepage="6"
        page={EmployeeDetailsComponent}
      ></PrivateRouteNew>
      <PrivateRouteNew
        exact
        path="/generateBill"
        activepage="5"
        page={BillGenerateComponent}
      ></PrivateRouteNew>
      <PrivateRouteNew
        exact
        path="/custumerRequest"
        activepage="7"
        page={CustomerRequestComponent}
      ></PrivateRouteNew>
      
    </Switch>
  </Router>
  , document.getElementById("root")
)
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

