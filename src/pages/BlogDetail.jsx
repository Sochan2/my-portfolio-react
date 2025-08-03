import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getPostBySlug } from '../utils/getPostBySlug';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Sidebar from '../components/blogs/Sidebar';

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostBySlug(slug).then(setPost).catch(console.error);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
  
    <>
  
    <main className = 'blog-detail-main container-xl grid-gap-6 xl:grid-cols-12 '>
      <div className="col-span-9 xl:col-span-8 col-start-2">
        <div className="max-w-3xl mx-auto px-4 md:px-0">
          <div className="blog-top">
          <h1>{post.title}</h1>
         
          <div class="category-date-detail">
            <p class="post-category">{post.category}</p>
            <p>{post.date}</p>
            </div>
            
        {post.thumbnail && (
            <img
              src={post.thumbnail}
              alt="Blog thumbnail"
              className="mb-4 w-full h-auto"
            />
          )}
         
      
          </div>
       
      
        <article className="blog-detail">
        <ReactMarkdown
          children={post.content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
        </article>
        </div>
        </div>
  

    <aside className="col-span-3 pt-10">
        <Sidebar /> 
      </aside>

    
   
       
    </main>

     
    </>
    
     
    
 
  );
}
