import fm from 'front-matter';

const files = import.meta.glob('/src/posts/**/*.md', { as: 'raw' });

export async function getPostBySlug(slug) {
  for (const path in files) {
    if (path.includes(`${slug}.md`)) {
      const content = await files[path]();
      const { attributes, body } = fm(content);
      return {
        ...attributes,
        content: body,
        slug
      };
    }
  }
  throw new Error(`Post with slug "${slug}" not found`);
}