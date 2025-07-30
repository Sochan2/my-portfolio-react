import fm from 'front-matter';

export default async function getAllPosts(){
  const allFiles = import.meta.glob('/src/posts/**/*.md', {as:'raw'});
  const posts = [];
  for(const path in allFiles){
    const content = await allFiles[path]();
    
    //const {attributes} = fm(content);
    const {attributes} = fm(content);

    posts.push(
      {
        ...attributes,
        slug: path.split('/').pop().replace('.md', ''),
        raw:content,
      }
    );

  }
  console.log(posts); 
  return  posts.sort((a,b) => new Date(b.date )- new Date(a.date))
}