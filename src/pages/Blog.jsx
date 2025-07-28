import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import{getAllPosts} from "../utils/getAllPosts";

const Blog = ()=>{
const [posts,setPosts] = useState([]);
useEffect(()=>{
  getAllPosts().then(setPosts);
},[]);
  return(
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post=>(
          <li key ={post.slug}>
            <Link to={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
            <p>{post.date}|{post.category}</p>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
            
            </Link>
          </li>
        ))}
      
      </ul>
    </div>
  )
}

export default Blog