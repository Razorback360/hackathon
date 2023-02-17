import { render } from "react-dom";
import React from "react";

function NavBar() {
  return (
    <header
      style={{
        backgroundColor: "rgb(207,207,207)",
        padding: "20px 20px",
      }}
    >
      <nav
        style={{
          display: "flex",
        }}
      >
        <img
          src="image2.png"
          style={{
            width: "360px",
            height: "75px",
            marginLeft: "70px",
          }}
        ></img>
        <div
          className="right-Items"
          style={{
            textAlign: "right",
            display: "flex",
            marginLeft: "850px",
          }}
        >
          <button>Trial</button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
