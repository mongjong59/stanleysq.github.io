import React from "react"
import { NavLink } from "react-router-dom"
import { withRouter } from "react-router"
import FontAwesome from "react-fontawesome"
import "./Navbar.css"

const Navbar = () => (
  <nav className="nav">
    <div className="nav-main">
      <NavLink className="nav-button" to="/" exact>
        <FontAwesome name="home" className="nav-button-icon" />
        Home
      </NavLink>
      <NavLink className="nav-button" to="/portfolio">
        <FontAwesome name="briefcase" className="nav-button-icon" />
        Portfolio
      </NavLink>
    </div>
  </nav>
)

export default withRouter(Navbar)
