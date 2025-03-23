const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const errorHandler = require("./middlewares/error.middleware")
const { connectDB } = require("./config/db");
dotenv.config();

const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const menuRoute = require("./routes/menu.routes");

const app = express();

connectDB();

const corsOptions = {
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/menu", menuRoute);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening port ${process.env.PORT}`);
});
