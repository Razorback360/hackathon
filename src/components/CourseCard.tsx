import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { useState, useEffect } from "react";

const CourseCard = (props : {courseName: String, state: number, examNums:number }) =>{
    const [courseName, setCourseName] = useState("")
    const [state, setState] = useState(0)
    const [examNums, setExamNums] = useState(0)
    //const courseName = props.courseName
    //const state = props.state
    //const examNums = props.examNums
    var description: string;
    var color: any;

    useEffect(() => {
        setCourseName(props.courseName as string)
        setState(props.state)
        setExamNums(props.examNums)
    })
    if(state == 1){
        description = "there is " + examNums + " exams  selected"
        color = "#0C7E40B2"
    }
    else if( state == 0){
        description = "no exams selected"
        color = "#5F5F5FB2"
    }
    else{
        description = "CONFLICT"
        color = "#838638B2"
    }
    
    return(
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
            backgroundColor: color,
            borderRadius: "15px",
            opacity: "0,7",
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
              {courseName}
            </p>
          </nav>
          <body
            style={{
              marginLeft: "10px",
              textAlign: "left",
            }}
          >
            {description}
          </body>
        </div>
      </div>
    )
}

export default CourseCard;