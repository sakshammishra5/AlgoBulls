import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: [],
    likedPosts:[],
    bookmarkedPosts:[],
  },
  reducers: {
    addPosts: (state, action) => {
      state.allPosts.push(action.payload);
    },
    addlikedPosts:(state,action)=>{
      state.likedPosts.push(action.payload)
    },
    addbookmarkedPosts:(state,action)=>{
      state.bookmarkedPosts.push(action.payload)
    }
  },
});

export const {addPosts,addlikedPosts,addbookmarkedPosts}=postSlice.actions
export default postSlice.reducer