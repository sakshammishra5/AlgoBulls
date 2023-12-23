import React, { useEffect, useState } from "react";
import { getBookMarkedPost } from "../api";
import Post from "../Components/Post";
import { useSelector } from "react-redux";

const Mybookmark = () => {
  const [bookmarkedPost, setBookmarkedPost] = useState([]);
  useEffect(() => {
    getBookMarkedPost().then((data) => setBookmarkedPost(data));
  }, []);

  const yoPost=useSelector((state)=>state.posts.bookmarkedPosts)
  console.log(yoPost);
  console.log(yoPost[yoPost.length-1]);


  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        {bookmarkedPost.length > 0 &&
          bookmarkedPost.map((item, index) => (
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
