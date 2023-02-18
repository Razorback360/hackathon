import Calendar from "@/components/Calendar";
import Exam from "@/components/Exam";
import { useState } from "react";
import Router from "next/router";

export default function Panel({ data }) {
  const [hidden, setHidden] = useState(true)
  const [add, setAdd] = useState(false)
  const [disable, setDisable] = useState(true)
  const [newDate, setNewDate] = useState("")
  
  const courseExams = data.courseExams;
  console.log(data)
  let dates = data.dates;
  dates = dates.map(info => {
    let splitted = info.split(",")
  
    return {date: splitted[1], courseId: splitted[0], conflict: data.id === splitted[0] ? false : true}
  })
  let i = 1
  let meetings = []
  dates.forEach(date => {
    meetings.push({id: i,startDatetime:date.date,endDatetime:date.date, conflict: date.conflict})
    i++
  });

  let examCards = []
  
  courseExams.forEach(exam => {
    let i = 1;
    examCards.push(
      <Exam key={exam.id} date={exam.date.split(" ")[0]}  num={i} onClick={() => {
        fetch(`/api/course/${data.id}`,{
          method: "DELETE",
          body: JSON.stringify({"examId":exam.id})
        }).then((data) => {data.json().then((jsonstuff) => null)})
        
      }} />
    )
    i++;
  });

  return (
    <div className="min-h-screen flex md:flex-row flex-col items-center justify-center bg-gradient-to-br from-green-500 to-teal-300 ">
      <img
        src="/Hexagon.png"
        alt="Background Image"
        className="w-full h-full object-cover absolute inset-0"
      />

      <div className="flex flex-col bg-white pt-5 pb-5 rounded-2xl shadow-2xl w-full max-w-md h-screen items-center">
        <p className="font-bold text-center text-xl mb-3">{data.name}</p>
        <div className={`w-[100%] h-2 bg-green-600`} />
        {examCards.length >0 && examCards}
        {add && <Exam onClick={() => {setAdd(false)
        setDisable(true)
        setHidden(true)}} num={""} date={`${newDate.slice(0,8)}${(parseInt(newDate.slice(8,10))+1) < 10 ? "0"+(parseInt(newDate.slice(8,10))+1): (parseInt(newDate.slice(8,10))+1)}`}/>}
        <div className={`w-3/4 h-12 mt-10 flex-row flex z-50 `} onClick={() => {
          setAdd(true)
          setHidden(false)
          setDisable(false)
        }}>
          
          <div className={`${add ? "hidden" : null} rounded-full cursor-pointer text-green-500 hover:text-white hover:bg-green-500 border-green-500 border-2 items-center flex flex-grow justify-center`}>
            <p className="text-center text-xl "> Add an Exam
            </p>
          </div>
        </div>

        <div className={`w-3/4 h-12 mt-auto flex-row flex z-50 ${hidden ? "hidden": null}`} onClick={() => {
          console.log(disable)
          if(disable === false){
            const req = fetch(`/api/course/${data.id}`,{
              method: "POST",
              body: JSON.stringify({date:`${newDate.slice(0,8)}${(parseInt(newDate.slice(8,10))+1) < 10 ? "0"+(parseInt(newDate.slice(8,10))+1): (parseInt(newDate.slice(8,10))+1)}`})
            }).then((res) => {
              res.json().then((jsonstuff) => {
                setAdd(false)
          setHidden(true)
          setDisable(true)
                Router.reload()
              })
            })
          }}}>
          <div className="cursor-pointer text-green-500 hover:text-white hover:bg-green-500 border-green-500 border-2 items-center flex flex-grow justify-center rounded-full">
            <p className="text-center text-xl"> Save
            </p>
          </div>
        </div>
        
      </div>
      <Calendar meetings={meetings} stateSetter={setNewDate} newDate={newDate}></Calendar>
    </div>
  );
}

export const getServerSideProps = async ({params}) => {
  const res = await fetch(`http://localhost:3000/api/course/${params.id}`)
  const data = await res.json()
  data.id = params.id
  return{
    props:{
      data
    }
  }
}