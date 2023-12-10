import React, { useEffect, useState } from "react";
import { getLikesPost } from "../api";
import Post from "../Components/Post";

const Mylikes = () => {
  const [likedPost, setLikedPost] = useState([]);

  useEffect(() => {
    getLikesPost().then((data) => setLikedPost(data));
  }, []);

  console.log(likedPost);
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        {likedPost.length > 0 &&
          likedPost.map((item, index) => (
            <Post
              user={item.user}
              comments={item.comments}
              likes={item.likes}
              content={item.content}
              bookmarks={item.bookmarks}
              index={index}
            />
          ))}
      </div>
    </>
  );
};

export default Mylikes;
