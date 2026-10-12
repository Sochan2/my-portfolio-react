import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import getAllPosts from "../utils/getAllPosts.jsx";
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    <Header />
    <main className="section">
    <h1>Blog</h1>
      <ul>
      <div className="blog card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(post=>(
         
             <li key ={post.slug}>
            <Link to={`/blog/${post.slug}`}>
            <img src={post.thumbnail} alt={post.title}></img>
            <div className="category-date">
            <p className="post-category">{post.category}</p>
            <p>{post.date}</p>
            </div>
           
            <h3>{post.title}</h3>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
           
            
            </Link>
          </li>
         
        ))}
          </div>
      
      </ul>
    </main>
    <Footer />
     
    </>
  )
}

export default Blog