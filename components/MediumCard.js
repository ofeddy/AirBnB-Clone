export default function MediumCard({item}){
    return (
            <div className="w-96 rounded-sm cursor-pointer hover:scale-105 transform duration-300 ease-out">
                <div className="relative h-80 w-80">
                    <img layout="fill" src={item.img} className="rounded-xl"/>
                </div>
                
                    <h1 className="text-2x1 mt-3">{item.title}</h1>
            </div>
    )
}