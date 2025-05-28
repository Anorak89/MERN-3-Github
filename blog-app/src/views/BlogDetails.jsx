import React from 'react'
import { useParams } from 'react-router-dom'
const BlogDetails = ({blogs}) => {
    const params = useParams();
    const id = params.id;

    const blog=blogs.find(u=>u.id == id);
    if(!blog) return <p>No blog found little git</p>
    return (
        <div>
            <h2>{blog.title}</h2>
            <div>Content: {blog.content}</div>
            <div>Author: {blog.author}</div>
            <div>Likes: {blog.likes}</div>
        </div>
    )
}

export default BlogDetails