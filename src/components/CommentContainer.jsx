import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";
// const commentsData =  

const CommentContainer = () => {

  const [comments, setcomments] = useState([]);
  useEffect(() => {
    getComments();
  },[])

  const getComments = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API);
    const json = await data.json();
    // console.log(json.items);
    getComments(json.items);
  };
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold"> Comments  </h1>
      {comments.map((item) =>(
          <p key={item.id} info={item}/>
      ))}
    </div>
  );
};

export default CommentContainer;
