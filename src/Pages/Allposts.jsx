import React, { useState } from 'react'
import Createpost from '../Components/CreatePost'
import { getPost } from '../api'
import Post from '../Components/Post'

const Allposts = () => {
  // const [allPost,setAllPost]=useState(getPost())
  // console.log(getPost())
  return (
    <>
    <Createpost/>
    </>
  )
}

export default Allposts