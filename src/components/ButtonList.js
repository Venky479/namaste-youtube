import CommonButton from "./CommonButton";

const list = [
  "All",
  "News",
  "Music",
  "Live",
  "Sports",
  "Songs",
  "Movies",
  "Cricket",
  "Dhoni",
  "Cooking",
  "Telugu",
  "NTR",
  "Mixes",
  "JavaScript",
  "Stories",
  
];
const ButtonList = () => {
  return (
    <div className="flex ">
      {list.map((name) =>(
        <CommonButton name= {name}/>
      ))}
    </div>
  );
};

export default ButtonList;
