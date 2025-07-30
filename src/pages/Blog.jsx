import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import getAllPosts from "../utils/getAllPosts.jsx";

const Blog = ()=>{
const [posts,setPosts] = useState([]);
useEffect(()=>{
  const fetchPosts = async()=>{
    const posts = await getAllPosts();
    setPosts(posts);
  }
  fetchPosts();
 
},[]);


  return(
    <>
      <h1>Blog</h1>
      <ul>
      <div className="grid grid-cols-3 gap-4">
        {posts.map(post=>(
         
             <li key ={post.slug}>
            <Link to={`/blog/${post.slug}`}>
            <img src={post.thumbnail} alt={post.title}></img>
            <h2>{post.title}</h2>
            <p>{post.date}|{post.category}</p>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
            
            </Link>
          </li>
         
        ))}
          </div>
      
      </ul>
    </>
  )
}

export default Blog