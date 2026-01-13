import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 3000;
export const cacheTTL = Number(process.env.CACHE_TTL) || 60;
