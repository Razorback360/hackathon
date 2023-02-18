import Calendar from "@/components/Calendar";
import Exam from "@/components/Exam";

export default function Panel({ data }) {
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

  

  return (
    <div className="min-h-screen flex md:flex-row flex-col items-center justify-center bg-gradient-to-br from-green-500 to-teal-300 ">
      <img
        src="/Hexagon.png"
        alt="Background Image"
        className="w-full h-full object-cover absolute inset-0"
      />

      <div className="flex flex-col bg-white pt-5 pb-5 rounded-2xl shadow-2xl w-full max-w-md h-screen items-center">
        <p className="font-bold text-center text-xl mb-3">Course Name</p>
        <div className={`w-[100%] h-2 bg-green-600`} />
        {}
      </div>
      <Calendar meetings={meetings}></Calendar>
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