import { TrashIcon } from "@heroicons/react/24/solid"

const Exam = ({onClick, num, date}) => {
  return(
    <div className="w-3/4 h-12 mt-10 flex-row flex">
          <div className="bg-green-600 rounded-full items-center flex flex-grow justify-between">
            <p className="font-bold text-center text-xl ml-5 text-white ">
              Exam {num}
            </p>
            <p className="text-center self-center ml-16 text-gray-50 mr-5">{date}</p>
          </div>
          <div className="h-full rounded-full bg-red-600 w-12 flex justify-center items-center ml-2" onClick={onClick}>
            <TrashIcon className="w-5 h-5 text-white rounded-full" />
          </div>
        </div>
  )
}

export default Exam;