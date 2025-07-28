import { useParams } from 'react-router-dom';
import BlogPost from '../components/blogs/BlogPost';

export default function BlogDetail(){

const {slug } = useParams();
const filePath = `/posts/2025/${slug}.md`;

return(
  <div className = 'bg-gray-100 min-h-screen'>
    <BlogPost filePath = {filePath} />
  </div>
)
}