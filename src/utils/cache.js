import NodeCache from "node-cache";
import { cacheTTL } from "../config/env.js";

const cache = new NodeCache({
  stdTTL: cacheTTL,
  checkperiod: cacheTTL * 0.2,
  useClones: false,
});

export default cache;
