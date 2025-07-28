
import { useState,useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import matter from 'gray-matter';

export default function BlogPost({filePath}){
const [post, setPost ] = useState({
  content:'',
  data:{}
});

useEffect(()=>{
  fetch(filePath)
  .then(res=>res.text())
  .then(md=>{
    const{content,data} = matter(md)
    setPost({content,data})
  })
},[filePath])


return(
  <article className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
    <h1 className ="text-3xl font-bold mb-2"></h1>
    <p className="text-gray-500 mb-4">{post.data.date} | {post.data.category}</p>
    <ReactMarkdown
        children={post.content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      />
  </article>
)


}