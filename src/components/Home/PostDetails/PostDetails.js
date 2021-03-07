import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {id} = useParams();
    const [post,setPost] = useState({});

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPost(data));
    },[id]);


    return (
        <div>
            <h1>Title: {post.title}</h1>
            <p>Body: {post.body}</p>
        </div>
    );
};

export default PostDetails;