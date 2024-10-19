import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = ()=>{
    const isMenuStatus = useSelector((store) => store.app.isMenuOpen);
    console.log({isMenuStatus});
    if(!isMenuStatus) return null;
    return (
        <div className="pl-5 shadow-lg w-35">
            <ul>
            <li><Link to ="/">Home</Link></li>
            <li>Shorts</li>
            </ul>

            <h1 className="font-semibold mt-2">Subscriptions</h1>
            <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li> 
            </ul>

            <h1 className="font-semibold mt-2">Watch Later</h1>
            <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            </ul>

        </div>
    )
}

export default Sidebar;