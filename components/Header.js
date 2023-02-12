import Image from "next/image"
import {MagnifyingGlassIcon,
        GlobeAltIcon,
        Bars3Icon,
        UserCircleIcon,
        UsersIcon,
} from "@heroicons/react/20/solid"


export default function Header(){
    return(
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/*logo*/}
            <div className="relative flex items-center h-10 my-auto cursor-pointer">
                <img src="https://miro.medium.com/max/1400/0*NChTo-XqLOxLabIW" width="100px" height="auto" objectFit="contain" objectPosition="left" layout="fill"/>
            </div>
            {/*search*/}
            <div className="flex items-center border-2 rounded-full p-2 md:shadow-sm">
                <input type="text" placeholder="Start your Search" className="bg-transparent pl-5 outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"/>
                <MagnifyingGlassIcon className="hidden md:inline-flex bg-red-400 h-8 rounded-full p-2 cursor-pointer mx-auto"/>
            </div>
            {/*right panel*/}
            <div className="flex items-center justify-end space-x-4 h-10 w-full p-2 text-gray-600">
                   <p className="hidden md:inline">Become a host</p> 
                   <GlobeAltIcon className="h-6 cursor-pointer"/>
                <div className="flex  p-2 border-2 rounded-full">
                <Bars3Icon className="h-6 cursor-pointer"/>
                <UserCircleIcon className="h-6 cursor-pointer"/>
               </div>
            </div>
        </header>
    )
}