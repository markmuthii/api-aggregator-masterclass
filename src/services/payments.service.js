import { readJsonFile } from "../utils/readJson.js";

export const getPaymentsMetrics = async () => {
  const payments = await readJsonFile("src/data/payments.json");

  const successfulPayments = payments.filter(
    (payment) => payment.status === "success"
  );

  const totalRevenue = successfulPayments.reduce(
    (sum, payment) => sum + payment.amount,
    0
  );

  return {
    totalRevenue,
    transactions: successfulPayments.length,
  };
};
