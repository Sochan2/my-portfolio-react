import matter from 'gray-matter';

export async function getAllPosts(){
  const allFiles = import.meta.glob('/src/posts/**/*.md', { as: 'raw' })
  const posts = [];
  for (const path in allFiles){
    const content = await allFiles[path]()
    const {data} = matter(content)
    posts.push({...data})
  }

  return  posts.sort((a,b) => new Date(b.date )- new Date(a.date))
}