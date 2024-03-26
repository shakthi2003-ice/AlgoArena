const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const mongoose = require("mongoose");
dotenv.config();
const MongoStore = require("connect-mongo");
const cors = require("cors");
const app = express();
const session = require("express-session");
const User = require("../server/models/User")

require("./config/passport")(passport);

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "some random secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),

  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("DB Connected")
);


app.use('/api/code', require('./routes/code'))
app.use('/api/problem', require('./routes/problem'))
app.use('/api/auth', require('./routes/auth'))

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failed",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/");
  }
);


const { default: DAuthStrategy } = require('passport-delta-oauth2')


const port = 3000


const DAUTH_CALLBACK_URL = 'http://localhost:3000/'
const DAUTH_CLIENT_ID = process.env.DAUTH_CLIENT_ID



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server is listening on " + PORT));

