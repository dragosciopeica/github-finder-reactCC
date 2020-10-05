import React  from "react";
import PropTypes from "prop-types";

// Folosim procesul numit: "Destructing". Extragem din PROPS ce avem nevoie, adica icon si title
const  Navbar = ({icon, title}) => {
  // asta in caz ca NU avem trimise PROPS-urile de la APP.js
     
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon}></i>
          {title}
        </h1>
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
