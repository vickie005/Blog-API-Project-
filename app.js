const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

const postRoutes = require("./blog-api/routes/postRoutes");
const logger = require("./blog-api/middlewares/logger");
const errorHandler = require("./blog-api/middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(logger);
app.use(morgan("dev"));

// Routes
app.use("/api/posts", postRoutes);

// Error handler
app.use(errorHandler);

// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
