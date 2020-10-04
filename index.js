const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/db");
const socketio = require("socket.io");
const session = require("express-session")
const MongoStore = require("connect-mongodb-session")(session)
const taskRoutes = require("./routes/task");
const counterpartyRoutes = require("./routes/counterparty");
const groupRoutes = require("./routes/group");
const getAdmin = require("./routes/getadmin");
const addToArchive = require("./routes/addToArchive");
const databaseRoutes = require("./routes/database");
const listenerRoutes = require("./routes/listener");
const courseRoutes = require("./routes/course");
const dealsRoutes = require("./routes/deal");
const settingsRoutes = require("./routes/settings");
const eventsRoutes = require("./routes/event");
const authRoutes = require("./routes/auth")

const PORT = process.env.PORT || 5000;
const app = express();

mongoose.set("useCreateIndex", true);
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log({ database_error: err });
  });

const store = new MongoStore({
  collection: "session",
  uri: config.database,
})

app.use(cors());
app.use("/files", express.static(path.join(__dirname, "files")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: "some secret value",
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    maxAge: 1000 * 60 * 60 * 24
  },
  store
}))

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api/files", databaseRoutes);
app.use("/api/archive", addToArchive);
app.use("/api/getAdmin", getAdmin);
app.use("/api/tasks", taskRoutes);
app.use("/api/counterparty", counterpartyRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/listeners", listenerRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/deals", dealsRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/auth", authRoutes)


if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

const io = socketio(server);
io.on("connection", (socket) => {
  console.log("Connected");
  io.on("disconnect", () => {
    console.log("Disconnected");
  });
});
