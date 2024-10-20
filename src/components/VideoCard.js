const VideoCard = ({ info }) => {
  console.log(info);
  let snippet;
  let statistics;
  let channelTitle;
  let thumbnails;
  let title;
  let viewCount;
  // Example check before destructuring
  //This code first ensures that info is not undefined or null before attempting to destructure snippet. This way, you can avoid the TypeError you encountered. Adjust this pattern according to your specific use case and structure of your code.
  if (info && info.snippet && info.statistics) {
    statistics = info.statistics;
    snippet = info.snippet;
    //const { channelTitle, thumbnails, title } = snippet;
    channelTitle = snippet.channelTitle;
    thumbnails = snippet.thumbnails.medium.url;
    title = snippet.title;
    viewCount = statistics.viewCount;
    console.log({ thumbnails });

    // Now you can safely use `snippet` here
    console.log("thumbnails", thumbnails);
    console.log("statistics", statistics);
  } else {
    console.error("info or info.snippet or info.statistics is undefined.");
  }
  console.log(thumbnails);

  return (
    <div className=" p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails} alt="thumbnails" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-600 ">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
