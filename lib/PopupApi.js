import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const popupsDirectory = join(process.cwd(), "_popups");

export function getPopupSlugs() {
  return fs.readdirSync(popupsDirectory);
}

export function getPopupBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(popupsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPopups(fields = []) {
  const slugs = getPopupSlugs();
  const popups = slugs
    .map((slug) => getPopupBySlug(slug, fields))
    .sort((popup1, popup2) => (popup1.date > popup2.date ? -1 : 1));
  return popups;
}
