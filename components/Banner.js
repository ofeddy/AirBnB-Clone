export default function Banner(){
    return (
        <div className="relative h-[50vh] bg-white">
            <img 
                src="https://images.pexels.com/photos/96800/pexels-photo-96800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                objectfit="cover"
                objectposition="center"
                className="w-screen h-full"
            />
            <div className="absolute top-20 w-full text-center font-bold">
                <p className=" text-sm sm:text-lg">Not Sure Where Next? Perfect!</p>
                <button className="bg-purple-600 py-4 px-6 shadow-md  rounded-full my-3 cursor-pointer hover:shadow-purple-50 hover:shadow-xl active:scale-90 transition duration-150">I am Flexible</button>
            </div>
        </div>
    )
}