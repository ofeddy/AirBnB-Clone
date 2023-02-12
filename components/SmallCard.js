

export default function SmallCard({item}){
    return(
        <div className="flex w-contain items-center text-gray-600 rounded-xl cursor-pointer hover:bg-gray-200 hover:shadow-md hover:scale-105 transition-transform duration-300 ease-out">
            <img className="w-16 h-16 rounded-lg m-2" src={item.img} />
            <div>
                <p className="font-bold">{item.location}</p>
                <p>{item.distance}</p>
            </div>
        </div>
    )

}