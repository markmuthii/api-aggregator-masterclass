import express from "express";
import { getDashboardSummary } from "../aggregators/dashboard.aggregator.js";

const router = express.Router();

router.get("/summary", async (req, res) => {
  const data = await getDashboardSummary();
  res.json(data);
});

export default router;
