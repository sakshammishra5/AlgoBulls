import React, { useEffect, useState } from "react";
import { getLikesPost } from "../api";
import Post from "../Components/Post";
import { useSelector } from "react-redux";

const Mylikes = () => {  
  const temp=useSelector((state)=>state.posts.likedPosts)
  const likedpostArray=temp[temp.length-1]
  
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-5">
        {likedpostArray &&
          likedpostArray.map((item, index) => (
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
