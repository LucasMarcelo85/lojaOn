import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="container">
        <div className="menu-items">
          <div className="categories">
            <span className="fa-solid fa-border-all"></span>
            <h4 className="head-categories">Conheça nossos produtos</h4>
          </div>
          <ul
            className={
              mobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
            }
            onClick={() => setMobileMenu(false)}
          >
            <li>
              <Link aria-label="Home" className="link-hover" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                aria-label="All Products"
                className="link-hover"
                to="/all-products"
              >
                Todos os Produtos
              </Link>
            </li>
           
            <li>
              
            </li>
            {/* <li>
              <Link to="/admin-dashboard">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li> */}
          </ul>
        </div>
        <button
          aria-label="Menu bar"
          className="toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <i className="fas fa-times close home-btn"></i>
          ) : (
            <i className="fa fa-bars open"></i>
          )}
        </button>
      </header>
    </>
  );
};

export default Navbar;
