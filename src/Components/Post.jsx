import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { CiBookmark } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

const Post = ({
  postId,
  isLiked,
  isBookmarked,
  user,
  comments,
  likes,
  bookmarks,
  content,
  postArray,
  setPostArray,
  index,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [Comments, setComments] = useState(comments || []);
  const [commentContent, setCommentContent] = useState({
    user: "saksham",
    content: "",
  });

  function onClickHandler() {
    setShowComments((prev) => !prev);
  }

  function commentHandler(e) {
    const { name, value } = e.target;
    setCommentContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleLike = (pId) => {
    setPostArray((prevPosts) =>
      prevPosts.map((post) =>
        post.id == pId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleBookmark = (pId) => {
    setPostArray((prevPosts) =>
      prevPosts.map((post) =>
        post.id === pId ? { ...post, bookmarks: !post.bookmarks } : post
      )
    );
  };

  function onsubmitComment(e) {
    e.preventDefault();
    let tempComment = commentContent;
    setComments((prev) => [tempComment, ...prev]);
  }

  return (
    <>
      <div
        data-testid="postCard"
        className="w-2/5 bg-white border border-gray-400 mb-4 rounded-xl"
      >
        <div className="flex items-center font-semibold ml-5 mt-4">
          <img className="w-9 rounded-full" src={user.photo} alt="" />
          <p className="ml-3">{user.name}</p>
        </div>
        <p className="py-2 font-mono ml-10">{content}</p>
        <div className="w-1/2 flex justify-evenly mx-auto mt-5 scale-125 py-2">
          <span className="flex items-center">
            <HiOutlineChatBubbleOvalLeft />
            <span className="text-xs text-black ml-1">{comments.length}</span>
          </span>
          <span
            className="flex items-center"
            onClick={() => handleLike(postId)}
          >
            {isLiked ? <FcLike /> : <CiHeart />}
            <span className="text-xs text-black ml-1">{likes}</span>
          </span>
          <span
            className="flex items-center"
            onClick={() => handleBookmark(postId)}
          >
           {isBookmarked?<FaBookmark/>:<CiBookmark />}
          </span>
        </div>
        <div className="flex justify-center items-center bg-slate-50 mt-2 border border-gray-700 cursor-pointer">
          Comments
          <span className=" ml-44" onClick={onClickHandler}>
            {showComments ? <FaMinus /> : <FaPlus />}
          </span>
        </div>
        {showComments && (
          <div>
            <ul>
              {Comments.map((item) => (
                <li className="ml-4 my-1 text-sm text-gray-700 w-52 p-1 bg-cyan-200 rounded-md  flex items-center border border-white">
                  {<CgProfile className="scale-125 mr-3" />}
                  {item.user}"-" {item.content} {"Date"}
                </li>
              ))}
            </ul>
            <form onSubmit={onsubmitComment}>
              <input
                type="text"
                name="content"
                value={commentContent.content}
                onChange={commentHandler}
                className="ml-5 my-2 rounded-lg"
              />
              <button
                type="submit"
                className="p-1 bg-black text-white rounded-sm ml-5"
              >
                Add
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
