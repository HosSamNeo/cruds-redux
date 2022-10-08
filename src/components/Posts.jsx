import React, { useState }  from 'react';
import { addPost , deletePost  , updatePost} from '../Redux/PostsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function Posts() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const [edit,isEdit] = useState(false);
    const [id,setId] = useState('');
    const [updateDescription , setUpdateDescription  ] = useState('');
    const [updateTitle , setUpdateTitle ] = useState('');

    return (
        <div>
            <div className='form'>
                <input value={title} type="text" placeholder='Enter Post Title' onChange={(e) => setTitle(e.target.value)}/>
                <input value={description} type="text" placeholder='Enter Post Desc' onChange={(e) => setDescription(e.target.value)} />
                <button onClick={() => {
                    dispatch(addPost({id:uuidv4(),title,description}));
                    setTitle('');
                    setDescription('');
                }}>Add Post</button>
            </div>

            <div className='posts'>
                    { posts.length > 0 ? posts.map((post) => (
                        <div key={post.id} className="post">
                                <h2>{post.title}</h2>
                                <p>{post.description}</p>
                                <button onClick={() => {
                                    isEdit(!edit);
                                    setId(post.id);
                                }}>Edit</button>  
                                <button onClick={() => dispatch(deletePost({id:post.id}))}>Delete</button>  
                                <br />
                               {edit && id === post.id ?  <>
                                    <input onChange={(e) => setUpdateTitle(e.target.value)} value={updateTitle} type="text" placeholder='updated Title' />
                                    <input onChange={(e) => setUpdateDescription(e.target.value)} value={updateDescription} type="text" placeholder='updated Desc' />
                                    <button onClick={() =>{
                                        dispatch(updatePost({id:post.id,title:updateTitle,description:updateDescription}));
                                        isEdit(!edit);
                                        setUpdateTitle('');
                                        setUpdateDescription('');
                                    }}>Update</button>
                                </> : ''}
                        </div>
                            )) : 'There\'s no posts'}   
            </div>
        </div>
    )
}