import fs from "fs/promises";
import path from "path";

export const readJsonFile = async (relativePath) => {
  const filePath = path.resolve(process.cwd(), relativePath);
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};
