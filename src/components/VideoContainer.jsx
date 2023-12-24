import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setvideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((item) => (
        <Link to={"/watch?v=" + item.id}>
          <VideoCard key={item.id} info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
