import hamburger from "../images/hamburger.png";
import youtubeLogo from "../images/youtubelogo.jpg";
import userLogo from "../images/userlogo.png";
import searchLogo from "../images/search.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    // grid 12 portions
    <div className="grid grid-flow-col  m-1 p-1 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src={hamburger}
          alt="hamburger-icon"
        />
        <img className="h-8 mx-2 cursor-pointer " src={youtubeLogo} alt="youtube-logo" />
      </div>
      <div className="flex col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full "
          type="text"
        />
        <img
          className="border border-gray-400 rounded-r-full bg-gray-200 "
          src={searchLogo} alt="search-logo"
        ></img>
      </div>
      <div className="col-span-1">
        <img className="h-4" src={userLogo} alt="user-logo" />
      </div>
    </div>
  );
};

export default Head;
