const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/database");

const captainRoutes = require("./routes/captainRoutes");

dotenv.config();

const app = express();

// MongoDB Connect
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/ships", require("./routes/shipRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/captains", captainRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("ShipMS Backend Running");
});

// Server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
});