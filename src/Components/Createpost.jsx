import { Button, Modal } from "flowbite-react";
import { useState, useEffect, useContext } from "react";
import { BsFilePost } from "react-icons/bs";
import Post from "./Post";
import { getPost } from "../api";


export default function Createpost() {
  const [openModal, setOpenModal] = useState(false);
  const [post, setPost] = useState({ content: "", date: "", Like: 0 });
  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    getPost().then((data) => setPostArray(data));
  }, []);

  console.log(postArray);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let month = months[d.getMonth()];
  let date = d.getDate();
  let year = d.getFullYear();
  const Time = month + " " + date + " " + year;

  function handleOnSubmit(e) {
    e.preventDefault();
    const tempPost = post;
    setPostArray((prev) => [tempPost,...prev]);
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    console.log(value);
    setPost((prev) => ({
      ...prev,
      [name]: value,
      user: {
        name: "Saksham",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3V7HJV_rUleIxRHBW8tpqfyBEZQ4IvTvzew&usqp=CAU",
      },
      date: Time,
      likes: 0,
      bookmarks: false,
      isOwner: true,
      comments: [
        { id: 1, userId: 2, user: "Alice", content: "Great post!" },
        { id: 2, userId: 3, user: "Bob", content: "I agree!" },
      ],
    }));
  }

  return (
    <>
      <div className="w-full bg-teal-200">
        <div>
          <Button
            className="ml-64 px-2 py-2 h-11 mx-auto mt-7"
            onClick={() => setOpenModal(true)}
          >
            Create Post
          </Button>
          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <BsFilePost className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  What's on your Mind ? 😊 create Post
                </h3>
                <div className="flex justify-center gap-4">
                  <form onSubmit={handleOnSubmit}>
                    <input
                      type="text"
                      className="border border-gray-400 rounded-3xl"
                      name="content"
                      onChange={handleOnChange}
                      value={post.content}
                    />
                    <Button
                      type="submit"
                      color="failure"
                      className="mt-4 mx-auto bg-blue-600"
                      onClick={() =>
                        setTimeout(() => {
                          setOpenModal(false);
                        }, 200)
                      }
                    >
                      {"Post"}
                    </Button>
                  </form>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <div className="flex justify-center  mt-4 flex-col mx-auto items-center">
          {postArray.map((item,index) => (
            <Post
              user={item.user}
              comments={item.comments}
              likes={item.likes}
              content={item.content}
              bookmarks={item.bookmarks}
              postArray={postArray}
              setPostArray={setPostArray}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}