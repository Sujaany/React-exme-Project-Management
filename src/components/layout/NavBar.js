import React  from 'react';
import {Link} from 'react-router-dom';
import SigninLink from "./SigninLink";
import SignoutLink from "./SignOutLink";

const Navbar = () =>{
    return(
        <nav className="nav-wrapper green darken-3">
        <div className="container">
        <Link to='/' className="brand-logo"> Mario Plan </Link>
        <SigninLink/>
        <SignoutLink/>
        </div>
        </nav>
    )
}

export default Navbar;