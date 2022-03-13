import React from 'react';
import './navbar.scss';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const NavBar = () => {
    const state = useSelector((state) => state.cart)
    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light py-3 shadow-sm sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand font-weight-bold fa-2x">ShahExpress</Link>

                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>

                <div className="buttons">
                    <Link to="/login" className="btn btn-outline-dark">
                        <i className="fa fa-sign-in mr-1"></i>
                        Login
                    </Link>
                    <Link to="/register" className="btn btn-outline-dark mx-2">
                        <i className="fa fa-user-plus mr-1"></i>
                        Register
                    </Link>
                    <Link to="/cart" className="btn btn-outline-dark">
                        <i className="fa fa-shopping-cart mr-1"></i>
                        Cart ({state.length})
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;