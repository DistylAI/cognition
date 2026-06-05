import { readFile } from "fs/promises";
import path from "path";

// Read a Markdown file from /content at request/build time. The files ship in
// the repo, so this resolves correctly in local dev and on Vercel.
export async function loadContent(file: string): Promise<string> {
  const full = path.join(process.cwd(), "content", file);
  return readFile(full, "utf-8");
}
