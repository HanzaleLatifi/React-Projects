import { NavLink, withRouter } from "react-router-dom"

function Navigation() {
    return (
        <div className="Nav">
            <NavLink className="Link" to="/" exact={true} activeClassName="ActiveNav" >Sign Up</NavLink>
            <NavLink className="Link" to="/login" activeClassName="ActiveNav" >Login</NavLink>
        </div>
    )
}

export default withRouter(Navigation)
