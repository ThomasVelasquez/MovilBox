import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cart } from "../../styles/icons/icons";

const Header = () => {

    const state = useSelector((state) => state.handleCart)

    return(
            <header className="container-fluid header__container mt-3 d-flex justify-content-between" >
                <h2>MovilBox</h2>
                <NavLink className="link" to={'/cart'}>
                    <div className="d-flex">
                        <img className="header__icon" src={cart} alt="cart"  /> 
                        <h5 className="header__cart-count" >{state.length}</h5>        
                    </div>
                </NavLink>
            </header>
        );
}

export default Header;