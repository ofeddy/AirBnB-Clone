export default function LargeCard({img, title, description, buttonText}){
    return (
        <div className="md:flex md:justify-around px-4 w-full py-16 bg-gray-200 text-gray-800 leading-7">
            <div>
                <h4 className="font-bold py-2">Support</h4>
                <a href="#" className="hover:underline">Help Center</a> <br/>
                <a href="#" className="hover:underline">AirCover</a> <br/>
                <a href="#" className="hover:underline">Supporting people with disabilities</a> <br/>
                <a href="#" className="hover:underline">Cancellation options</a> <br/>
                <a href="#" className="hover:underline">Report a neighborhood concern</a> <br/>
                <a href="#" className="hover:underline">Our COVID-19 Response</a> 
            </div>
            <div>
                <h4 className="font-bold py-2">Hosting</h4>
                <a href="#" className="hover:underline">Airbnb your home</a> <br/>
                <a href="#" className="hover:underline">AirCover for Hosts</a> <br/>
                <a href="#" className="hover:underline">Explore hosting resources</a> <br/>
                <a href="#" className="hover:underline">Visit our community forum</a> <br/>
                <a href="#" className="hover:underline">How to host responsibly</a> 
            </div>
            <div>
                <h4 className="font-bold py-2">Airbnb</h4>
                <a href="#" className="hover:underline">Newsroom</a> <br/>
                <a href="#" className="hover:underline">Learn about new features</a> <br/>
                <a href="#" className="hover:underline">Letter from our founders</a> <br/>
                <a href="#" className="hover:underline">Careers</a> <br/>
                <a href="#" className="hover:underline">Investors</a> <br/>
                <a href="#" className="hover:underline">Gift cards</a>
            </div>
            <div >
                <h4 className="font-bold py-2">Community</h4>
                <a href="#" className="hover:underline">Airbnb.org: disaster relief housing</a> <br/>
                <a href="#" className="hover:underline">Combating discrimination</a> 
            </div>
        </div>
        )
    }