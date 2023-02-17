import { render } from "react-dom";
import React from "react";

function CourseCard() {
  return (
    <div
      className="Container"
      style={{
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        padding: "90px 0px 90px 0px",
        backgroundColor: "rgb(252,252,252)",
      }}
    >
      <div
        className="Items"
        style={{
          justifyContent: "left",
          height: "150px",
          width: "350px",
          backgroundColor: "rgb(140,143,145)",
          borderRadius: "15px",
          opacity: "0,5",
          color: "white",
        }}
      >
        <nav
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            borderBottom: "5px solid",
            marginBottom: "10px",
            textAlign: "left",
          }}
        >
          <p
            style={{
              marginLeft: "10px",
            }}
          >
            ICS 104
          </p>
        </nav>
        <body
          style={{
            marginLeft: "10px",
            textAlign: "left",
          }}
        >
          Exams are not decided yet
        </body>
      </div>
    </div>
  );
}

export default CourseCard;
