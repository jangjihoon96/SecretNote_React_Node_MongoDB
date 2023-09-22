const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API RUNNING...");
});

// Connect DB
connectDB();

// allow us to get the data in request.body
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/register", require("./routes/api/register"));
app.use("/api/login", require("./routes/api/login"));
app.use("/api/posts/create", require("./routes/api/post"));
app.use("/api/posts/read", require("./routes/api/my-posts"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
