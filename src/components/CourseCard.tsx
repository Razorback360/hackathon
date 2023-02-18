import { useEffect, useState } from "react";

const CourseCard = ({ courseName = "", state = 0, onClick }) => {
  const [description, setDescription] = useState("No exams reserved.");
  const [color, setColor] = useState("#5F5F5FB2");
  const [checked, setChecked] = useState(false);

  if (checked === false) {
    switch (state) {
      case 1: {
        setDescription(`You have reserved exams.`);
        setColor("#0C7E40B2");
        setChecked(true);
      }
      case 0: {
        setDescription(`No exams reserved.`);
        setColor("#5F5F5FB2");
        setChecked(true);
      }
      case -1: {
        setDescription(`You have a possible conflict.`);
        setColor("#838638B2");
        setChecked(true);
      }
    }
  }
  return (
    
    <div
    onClick={onClick}
      className={`rounded-3xl w-[28rem] h-48 relative cursor-pointer m-5  bg-white disabled:pointer-events-none stop course-card ${state === 1
        ? "hover:bg-green-600"
        : state === 0
        ? "hover:bg-[#5F5F5FB2]"
        : "hover:bg-red-700"}`}
    >
      <p className="mt-4 mb-2 ml-5 text-4xl font-semibold text-black position: fixed; text-transform: uppercase font-mono">{courseName}</p>
      <div className={`w-[100%] h-2  ${
        state === 1
          ? "bg-green-600"
          : state === 0
          ? "bg-[#5F5F5FB2]"
          : "bg-red-700"}`}/>
      <p className="mt-4 mb-2 ml-5 text-xl text-gray-900 font-mono">Course has a possible conflict with another exam</p>
    </div>
    
    
  );
};

export default CourseCard;
