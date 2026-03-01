import fs from "fs";
import path from "path";

const POSTS_PATH = path.join(process.cwd(), "content/blog");

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
}

export async function getPosts(): Promise<Post[]> {
  if (!fs.existsSync(POSTS_PATH)) {
    return [];
  }

  const files = fs.readdirSync(POSTS_PATH);
  
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file);
      const content = fs.readFileSync(filePath, "utf8");
      
      // Simple frontmatter parser
      const frontmatterMatch = content.match(/---([\s\S]*?)---/);
      const frontmatter = frontmatterMatch ? frontmatterMatch[1] : "";
      
      const getValue = (key: string) => {
        const regex = new RegExp(`${key}:\\s*"?(.*?)"?(?:\\n|$)`);
        const match = frontmatter.match(regex);
        return match ? match[1].trim() : "";
      };

      const title = getValue("title");
      const excerpt = getValue("description");
      const date = getValue("date");
      const author = getValue("author");
      
      // Estimate reading time (roughly 200 words per minute)
      const wordCount = content.split(/\s+/).length;
      const readingTime = `${Math.ceil(wordCount / 200)} min read`;

      return {
        slug: file.replace(".mdx", ""),
        title: title || file,
        excerpt: excerpt || "",
        date: date || "",
        author: author || "Rare Team",
        readingTime,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, "utf8");
  
  // Strip frontmatter for the body
  const body = content.replace(/---[\s\S]*?---/, "").trim();
  
  // Extract metadata again (DRY-ish)
  const frontmatterMatch = content.match(/---([\s\S]*?)---/);
  const frontmatter = frontmatterMatch ? frontmatterMatch[1] : "";
  
  const getValue = (key: string) => {
    const regex = new RegExp(`${key}:\\s*"?(.*?)"?(?:\\n|$)`);
    const match = frontmatter.match(regex);
    return match ? match[1].trim() : "";
  };

  return {
    slug,
    title: getValue("title"),
    description: getValue("description"),
    date: getValue("date"),
    author: getValue("author"),
    body,
  };
}
