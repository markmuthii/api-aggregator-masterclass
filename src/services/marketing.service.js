import { readJsonFile } from "../utils/readJson.js";

export const getMarketingMetrics = async () => {
  const { visits, conversions } = await readJsonFile("src/data/marketing.json");

  const conversionRate = ((conversions / visits) * 100).toFixed(2);

  return {
    conversionRate: `${conversionRate}%`,
  };
};
