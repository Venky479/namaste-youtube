const CommonButton = (props) =>{
    const {name} = props;
    return (
        <div>
            <button className="px-2 py-1 m-1 bg-gray-200 rounded-lg" >{name}</button>
        </div>
    )
}

export default CommonButton;