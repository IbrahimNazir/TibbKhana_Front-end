import React from "react";


class NavBar extends React.Component {
    render() {
        return (<>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="#" className="bars" onClick={this.props.onBarClick} ></a>
                            <a className="navbar-brand" href="/">Tibb<b>Khana</b> - Drug Store</a>
                    </div>

                </div>
            </nav>
        </>)
    }
}
export default NavBar;
