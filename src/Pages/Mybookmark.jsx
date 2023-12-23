import React, { useEffect, useState } from "react";
import { getBookMarkedPost } from "../api";
import Post from "../Components/Post";
import { useSelector } from "react-redux";

const Mybookmark = () => {
  const temp=useSelector((state)=>state.posts.bookmarkedPosts)
  const bookmarkedArray=temp[temp.length-1]

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-5">
        {bookmarkedArray &&
          bookmarkedArray.map((item, index) => (
            <Post
              key={index}
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

export default Mybookmark;
