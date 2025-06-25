import "../CSS/CSS-Header.css";

import React from "react";

const Header = () => {
  return (
    <div className="Main-Header">
      <div className="Header-Top">
        <div></div>
        <div className="Header-Logo">
          <img src="/Icon.svg" />
          <h3>CHARLEE'S CLEANING</h3>
        </div>
        <div className="Header-Links"></div>
      </div>
      <div className="Header-Bottom">
        <ul>
          <div>
            <h3>HOME</h3>
          </div>
          <hr />
          <div>
            <h3>SERVICES</h3>
          </div>
          <hr />
          <div className="Header-Contact">
            <h3>CONTACT</h3>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
