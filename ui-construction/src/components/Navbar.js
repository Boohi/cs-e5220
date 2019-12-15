import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles.css";

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {active: "community"}
    }


    changeActive(active) {
        this.setState({active});
    }

	render() {
		return (
			<nav className="navbar navbar-expand-lg landing-navbar py-2">
				<Link className="navbar-brand" to="/" onClick={() => this.changeActive("community")}>
					EcoEle
				</Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className={"nav-item"} onClick={() => this.changeActive("community")}>
                            <Link className={"nav-link " + (this.state.active === "community" ? "activeLink" : "")} to="/">
                                Community
                            </Link>
                        </li>
                        <li className={"nav-item "} onClick={() => this.changeActive("preferences")}>
                            <Link className={"nav-link " + (this.state.active === "preferences" ? "activeLink" : "")} to="/preferences">
                                Preferences
                            </Link>
                        </li>
                        <li className={"nav-item "} onClick={() => this.changeActive("mydevices")}>
                            <Link className={"nav-link " + (this.state.active === "mydevices" ? "activeLink" : "")} to="/mydevices">
                                My Devices
                            </Link>
                        </li>
                        <li className={"nav-item "} onClick={() => this.changeActive("provider")}>
                            <Link className={"nav-link " + (this.state.active === "provider" ? "activeLink" : "")} to="/provider">
                                Provider
                            </Link>
                        </li>
                        <li className={"nav-item "} onClick={() => this.changeActive("settings")}>
                            <Link className={"nav-link " + (this.state.active === "settings" ? "activeLink" : "")} to="/settings">
                                <img
                                    src="/face-pic.png"
                                    alt={"Robert Warren"}
                                    title={"Robert Warren"}
                                    className="rounded-circle"
                                    style={{ width: "25px", marginRight: "5px" }}
                                />
                                Robert Warren
                            </Link>
                        </li>
                    </ul>
				</div>
			</nav>
		);
	}
}
