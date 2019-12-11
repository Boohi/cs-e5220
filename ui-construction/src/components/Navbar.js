import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles.css";

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg landing-navbar py-2">
				<Link className="navbar-brand" to="/">
					EcoEle
				</Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Community
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/preferences">
                                Preferences
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mydevices">
                                My Devices
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/provider">
                                Provider
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/settings">
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
