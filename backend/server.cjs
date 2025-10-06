const express = require("express");
const userRoutes = require("./routes/UserRoutes.cjs");
const postRoutes = require("./routes/PostRoutes.cjs");
const sequelize = require("./config/db.cjs");
const cors = require("./middleware/cors.cjs");

const app = express();
const port = process.env.VITE_SERVER_PORT;

app.use(cors);
app.use(express.json());

app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);

sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
