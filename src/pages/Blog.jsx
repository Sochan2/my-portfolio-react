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
      <div className=" blog grid grid-cols-3 gap-4 m-4">
        {posts.map(post=>(
         
             <li key ={post.slug}>
            <Link to={`/blog/${post.slug}`}>
            <img src={post.thumbnail} alt={post.title}></img>
            <div class="category-date">
            <p class="post-category">{post.category}</p>
            <p>{post.date}</p>
            </div>
           
            <h3>{post.title}</h3>
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