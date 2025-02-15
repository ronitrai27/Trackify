const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
require("./models/db");

const authRoutes = require("./routes/userRoute");
const inventoryRoutes = require("./routes/inventoryRoutes");
// import inventoryRoutes from "./routes/inventoryRoutes.js";
// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/inventory", inventoryRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
