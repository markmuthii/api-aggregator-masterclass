import { readJsonFile } from "../utils/readJson.js";

export const getSalesMetrics = async () => {
  const sales = await readJsonFile("src/data/sales.json");

  const totalSalesValue = sales.reduce((sum, sale) => sum + sale.price, 0);

  const averageOrderValue = totalSalesValue / sales.length;

  const productFrequency = sales.reduce((acc, sale) => {
    acc[sale.product] = (acc[sale.product] || 0) + 1;
    return acc;
  }, {});

  const topProduct = Object.entries(productFrequency).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  return {
    averageOrderValue: Number(averageOrderValue.toFixed(2)),
    topProduct,
  };
};
