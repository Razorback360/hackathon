import Calendar from "@/components/Calendar";
import { TrashIcon } from "@heroicons/react/24/solid";

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-11T13:00",
    endDatetime: "2022-05-11T14:30",
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-20T09:00",
    endDatetime: "2022-05-20T11:30",
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-20T17:00",
    endDatetime: "2022-05-20T18:30",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-06-09T13:00",
    endDatetime: "2023-06-09T14:30",
  },
  {
    id: 5,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-02-18",
    endDatetime: "2023-02-18",
  },
];

export default function Panel() {
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
        <div className="w-3/4 h-12 mt-10 flex-row flex">
          <div className="bg-green-600 rounded-full items-center flex flex-grow justify-between">
            <p className="font-bold text-center text-xl ml-5 text-white ">
              Exam 1
            </p>
            <p className="text-center self-center ml-16 text-gray-50 mr-5"> Aug 8</p>
          </div>
          <div className="h-full rounded-full bg-red-600 w-12 flex justify-center items-center ml-2">
            <TrashIcon className="w-5 h-5 text-white rounded-full" />
          </div>
        </div>
        <div className="w-3/4 h-12 mt-10 flex-row flex">
          <div className="bg-green-600 rounded-full items-center flex flex-grow justify-between">
            <p className="font-bold text-center text-xl ml-5 text-white ">
              Exam 2
            </p>
            <p className="text-center self-center ml-16 text-gray-50 mr-5"> Aug 8</p>
          </div>
          <div className="h-full rounded-full bg-red-600 w-12 flex justify-center items-center ml-2">
            <TrashIcon className="w-5 h-5 text-white rounded-full" />
          </div>
        </div>
        <div className="w-3/4 h-12 mt-10 flex-row flex">
          <div className="bg-green-600 rounded-full items-center flex flex-grow justify-between">
            <p className="font-bold text-center text-xl ml-5 text-white ">
              Exam 3
            </p>
            <p className="text-center self-center ml-16 text-gray-50 mr-5"> Aug 8</p>
          </div>
          <div className="h-full rounded-full bg-red-600 w-12 flex justify-center items-center ml-2">
            <TrashIcon className="w-5 h-5 text-white rounded-full" />
          </div>
        </div>
      </div>
      <Calendar meetings={meetings}></Calendar>
    </div>
  );
}
