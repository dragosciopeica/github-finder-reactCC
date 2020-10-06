import React  from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

// Folosim procesul numit: "Destructing". Extragem din PROPS ce avem nevoie, adica icon si title
const  Navbar = ({icon, title}) => {
  // asta in caz ca NU avem trimise PROPS-urile de la APP.js
     
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon}></i>
          {title}
        </h1>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        {/* {/* // NU FOLOSIM TAG-uri <A> </A> pentru ca NU ramane salvat cand navigam intre pagini */}


      </nav>
    );  
}

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
