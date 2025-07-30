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
      <main className = 'blog-detail-main w-full md:3/4 bg-white p6 rounded shadow'>
      {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt="Blog thumbnail"
            className="rounded-lg mb-4 w-full h-auto"
          />
        )}

      <h1>{post.title}</h1>
      <p className="text-gray-500">{post.date} | {post.category}</p>
      <div className = "flex flex-col md:flex-row">
      <article className="blog-detail">
      <ReactMarkdown
        children={post.content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      />
    </article>
  

    <aside className="w-full md:w-1/4 md:pl-6 mt-10 md:mt-0">
        <Sidebar />
      </aside>
        </div>
       
    </main>
    </>
    
     
    
 
  );
}
