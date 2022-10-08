import { createSlice } from "@reduxjs/toolkit";


export const PostsSlice = createSlice({
    name:'posts',
    initialState:{
        posts:[]
    },
    reducers:{
        addPost:(state,action) => {
            state.posts.push(action.payload);
        },
        deletePost:(state,action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload.id)
        },
        updatePost:(state,action) => {
            state.posts.map(post => {
                if(post.id === action.payload.id){
                    post.title = action.payload.title;
                    post.description = action.payload.description;
                }})
        },

    }
})

export const {addPost , deletePost , updatePost} = PostsSlice.actions;
let postsReducer = PostsSlice.reducer;
export default postsReducer;
