const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const adminRoutes = require("./routes/adminRoutes");
const newsRoutes = require("./routes/newsRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const standingsRoutes = require("./routes/standingsRoutes");

dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/admin", adminRoutes);
app.use("/news", newsRoutes);
app.use("/gallery", galleryRoutes);
app.use("/standings", standingsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));