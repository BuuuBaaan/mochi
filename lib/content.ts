import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  featured: boolean;
  content: string;
  readingTime: string;
};

export type Variety = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  difficulty: number;
  featured: boolean;
  highlight: string;
  image: string;
  content: string;
};

type Collection = "blog" | "varieties";

async function readMdxFiles(collection: Collection) {
  const targetDir = path.join(CONTENT_ROOT, collection);
  const entries = await fs.readdir(targetDir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name);
}

function toStringValue(input: unknown, fallback = "") {
  return typeof input === "string" ? input : fallback;
}

function toBooleanValue(input: unknown, fallback = false) {
  return typeof input === "boolean" ? input : fallback;
}

function toTags(input: unknown) {
  return Array.isArray(input)
    ? input.filter((tag): tag is string => typeof tag === "string")
    : [];
}

function toDifficulty(input: unknown) {
  if (typeof input === "number") {
    return Math.max(1, Math.min(5, Math.round(input)));
  }
  return 3;
}

async function readPostFile(collection: Collection, slug: string) {
  const filePath = path.join(CONTENT_ROOT, collection, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  return matter(raw);
}

export async function getAllBlogPosts() {
  const files = await readMdxFiles("blog");
  const posts = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const { content, data } = await readPostFile("blog", slug);
      const date = toStringValue(data.date, "2026-01-01");

      const post: BlogPost = {
        slug,
        title: toStringValue(data.title, slug),
        description: toStringValue(data.description, ""),
        date,
        tags: toTags(data.tags),
        category: toStringValue(data.category, "General"),
        featured: toBooleanValue(data.featured, false),
        content,
        readingTime: readingTime(content).text,
      };

      return post;
    }),
  );

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const { content, data } = await readPostFile("blog", slug);
    return {
      slug,
      title: toStringValue(data.title, slug),
      description: toStringValue(data.description, ""),
      date: toStringValue(data.date, "2026-01-01"),
      tags: toTags(data.tags),
      category: toStringValue(data.category, "General"),
      featured: toBooleanValue(data.featured, false),
      content,
      readingTime: readingTime(content).text,
    } satisfies BlogPost;
  } catch {
    return null;
  }
}

export async function getFeaturedBlogPosts(limit = 3) {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.featured).slice(0, limit);
}

export async function getAllVarieties() {
  const files = await readMdxFiles("varieties");
  const varieties = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const { content, data } = await readPostFile("varieties", slug);

      const variety: Variety = {
        slug,
        title: toStringValue(data.title, slug),
        description: toStringValue(data.description, ""),
        tags: toTags(data.tags),
        difficulty: toDifficulty(data.difficulty),
        featured: toBooleanValue(data.featured, false),
        highlight: toStringValue(data.highlight, "Variety highlight"),
        image: toStringValue(data.image, "/illustrations/fish-placeholder.svg"),
        content,
      };

      return variety;
    }),
  );

  return varieties.sort((a, b) => a.title.localeCompare(b.title, "ja"));
}

export async function getVarietyBySlug(slug: string) {
  try {
    const { content, data } = await readPostFile("varieties", slug);
    return {
      slug,
      title: toStringValue(data.title, slug),
      description: toStringValue(data.description, ""),
      tags: toTags(data.tags),
      difficulty: toDifficulty(data.difficulty),
      featured: toBooleanValue(data.featured, false),
      highlight: toStringValue(data.highlight, "Variety highlight"),
      image: toStringValue(data.image, "/illustrations/fish-placeholder.svg"),
      content,
    } satisfies Variety;
  } catch {
    return null;
  }
}

export async function getFeaturedVarieties(limit = 6) {
  const varieties = await getAllVarieties();
  return varieties.filter((variety) => variety.featured).slice(0, limit);
}