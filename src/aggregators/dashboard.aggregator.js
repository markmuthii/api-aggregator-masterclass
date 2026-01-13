import cache from "../utils/cache.js";
import { getPaymentsMetrics } from "../services/payments.service.js";
import { getSalesMetrics } from "../services/sales.service.js";
import { getMarketingMetrics } from "../services/marketing.service.js";

const CACHE_KEY = "dashboard_summary";

export const getDashboardSummary = async () => {
  if (cache.has(CACHE_KEY)) {
    console.log("Cache hit");

    return cache.get(CACHE_KEY);
  }

  const results = await Promise.allSettled([
    getPaymentsMetrics(),
    getSalesMetrics(),
    getMarketingMetrics(),
  ]);

  const [payments, sales, marketing] = results;

  const response = {
    revenue:
      payments.status === "fulfilled" ? payments.value.totalRevenue : null,
    transactions:
      payments.status === "fulfilled" ? payments.value.transactions : null,
    averageOrderValue:
      sales.status === "fulfilled" ? sales.value.averageOrderValue : null,
    topProduct: sales.status === "fulfilled" ? sales.value.topProduct : null,
    conversionRate:
      marketing.status === "fulfilled" ? marketing.value.conversionRate : null,
    dataSources: {
      payments: payments.status === "fulfilled" ? "ok" : "failed",
      sales: sales.status === "fulfilled" ? "ok" : "failed",
      marketing: marketing.status === "fulfilled" ? "ok" : "failed",
    },
    generatedAt: new Date().toISOString(),
  };

  cache.set(CACHE_KEY, response);
  return response;
};
