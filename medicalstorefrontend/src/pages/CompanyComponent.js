import React from 'react';
// import AuthHandler from '../utils/AuthHandler';
import APIHandler from '../utils/APIHandler';
const { default: AuthHandler } = require("../utils/AuthHandler");



class CompanyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }
    state = {
        errorRes: false,
        errorMessage: "",
        btnMessage: 0,
        sendData: false,
        companyDataList: [],
    }

    async formSubmit(event) {
        event.preventDefault();
        this.setState({ btnMessage: 1 });

        var apiHandler = new APIHandler();
        var response = await apiHandler.saveCompanyData(
            event.target.name.value,
            event.target.license_no.value,
            event.target.address.value,
            event.target.contact_no.value,
            event.target.email.value,
            event.target.description.value
        );
        console.log(response);
        this.setState({ btnMessage: 0 });
        this.setState({ errorRes: response.data.error });
        this.setState({ errorMessage: response.data.message });
        this.setState({ sendData: true });



    }
    //This Method Work When Our Page is Ready
    componentDidMount() {
        console.log("Token" + AuthHandler.checkTokenExpiry())
        if (AuthHandler.checkTokenExpiry()) {
            AuthHandler.logoutUser();
            window.location = "/";
        }
        this.fetchCompanyData();
    }

    async fetchCompanyData() {
        var apihandler = new APIHandler();
        var companydata = await apihandler.fetchAllCompany();
        console.log(companydata);
        this.setState({ companyDataList: companydata.data.data });
        this.setState({ dataLoaded: true });
        this.setState({ companyDataList: companydata.data.data })

    }
    viewCompanyDetails = (company_id) => {
        console.log(company_id)
        console.log(this.props)
        this.props.history.push("/companydetails/" + company_id)
    }
    render() {
        return (<>
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>MANAGE COMPANY</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header">
                                    <h2>
                                        Add Company
                                    </h2>

                                </div>
                                <div className="body">
                                    <form onSubmit={this.formSubmit}>
                                        <label htmlFor="email_address">Company Name</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" name="name" id="name" className="form-control" placeholder="Enter Company Name" />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">License No.</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" name="license_no" id="license_no" className="form-control" placeholder="Enter License No." />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Address</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" name="address" id="address" className="form-control" placeholder="Enter Company Address" />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Conatact No.</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" name="contact_no" id="contact_no" className="form-control" placeholder="Enter Contact No." />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Email</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" name="email" id="email" className="form-control" placeholder="Enter Email Address" />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Description</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" name="description" id="description" className="form-control" placeholder="Enter Description" />
                                            </div>
                                        </div>

                                        <br />
                                        <button type="submit" className="btn btn-primary m-t-15 waves-effect btn-block" disabled={this.state.btnMessage === 0 ? false : true}>
                                            {this.state.btnMessage === 0 ? "Add Company" : "Adding Company Please Wait"}
                                        </button>
                                        <br />
                                        {this.state.errorRes === false &&
                                            this.state.sendData === true ? (
                                            <div class="alert alert-success">
                                                <strong>Success! </strong>{this.state.errorMessage}</div>

                                        ) : ("")}

                                        {this.state.errorRes === true && this.state.sendData === true ? (

                                            <div class="alert alert-danger">
                                                <strong>Failed! </strong>{this.state.errorMessage}
                                            </div>) : ("")}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header">

                                    {this.state.dataLoaded === false ? (
                                    <div className='text-centre'>
                                        <div class="preloader pl-size-xl">
                                            <div class="spinner-layer">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div>
                                                <div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                            </div>
                                        </div>       
                                    </div>
                                    ):""}


                                    <h2>
                                        All Companies
                                    </h2>
                                </div>
                                <div className="body table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>License No</th>
                                                <th>Address</th>
                                                <th>Contact</th>
                                                <th>Email</th>
                                                <th>Description</th>
                                                <th>Added On</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ fontSize: 10 }}>
                                            {this.state.companyDataList.map((company) => (
                                                <tr key={company.id}>
                                                    <td >{company.id}</td>
                                                    <td>{company.name}</td>
                                                    <td>{company.license_no}</td>
                                                    <td>{company.address}</td>
                                                    <td>{company.contact_no}</td>
                                                    <td>{company.email}</td>
                                                    <td>{company.description}</td>
                                                    <td>{new Date(company.added_on).toLocaleString()}</td>
                                                    <td>
                                                        <button className='btn btn-block btn-warning' onClick={() => this.viewCompanyDetails(company.id)}>View</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>)
    }
}
export default CompanyComponent;




















