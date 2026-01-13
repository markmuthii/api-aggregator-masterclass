import app from "./app.js";
import { port } from "./config/env.js";

app.listen(port, () => {
  console.log(`BI API Aggregator running on port ${port}`);
});
