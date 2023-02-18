import { UserIcon } from "@heroicons/react/24/outline"


const Ribbon = () => {
    return(
        <div className="bg-white opacity-90 w-full md:h-[13%] z-50 relative flex justify-between">
            <img className="m-4 ml-32 w-auto h-auto" src="logo.png" alt="KFUPM Logo"/>
        <div className='flex justify-center items-center mr-20'>
            <UserIcon className="h-7 w-7 text-green-700" />
            <p className="text-[20px] ml-4 text-green-900" >Dr. Omar Mahmoud</p>
        </div>
        </div>
    )
}

export default Ribbon