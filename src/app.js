import express from "express";
import dashboardRoutes from "./routes/dashboard.routes.js";

const app = express();

app.use(express.json());
app.use("/api/dashboard", dashboardRoutes);

export default app;
