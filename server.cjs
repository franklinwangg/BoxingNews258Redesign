const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes.cjs");
const corsRoutes = require("./middleware/cors.cjs");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors(corsRoutes));

app.use("/posts", postRoutes);

app.listen(process.env.VITE_SERVER_PORT, () => {
  console.log(`Server listening on ${process.env.VITE_SERVER_PORT}`);
});
