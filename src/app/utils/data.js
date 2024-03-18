import matter from "gray-matter";
import fs from 'fs';

export const getBlogData = async (slug) => {
    try {
      const fileName = fs.readFileSync(`public/posts/${slug}.md`, 'utf-8');
      const { data: frontmatter, content } = matter(fileName);
  
      return {
          frontmatter,
          content
      };  
    } catch (error) {
      console.error(error);
  
      return {};  
    }
};

export const getBlogsData = () => {
    try {
      const files = fs.readdirSync('public/posts');
  
      const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`public/posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);
  
        return {
          slug,
          frontmatter
        };  
      }); 
  
      return posts
    } catch (error) {
      console.error(error);
  
      return []
    }
};

export const categories = [
    "OVERSEAS EDUCATION",
    "STUDY IN ABROAD",
    "STUDY IN UK",
    "STUDENTS LIFESTYLE",
    "INTERNATIONAL STUDENTS",
    "INTERNATIONAL COURSES",
    "EVENTS",
    "STUDY IN CANADA"
]