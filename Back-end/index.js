const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

// const origin = process.env.NODE_ENV === "development" 
//   ? "http://localhost:3000" 
//   : "http://example.com";
const origin = "http://localhost:3000";
const mainRouter = require("./app/routes/index.js");

app.use(cookieParser());
app.use(express.json());
app.use(mainRouter);
app.use(
    cors({
      credentials: true,
      origin
    }),
  );
// app.use(cors());


app.post("/login", (req,res) => {
    const userid = 5;

    res.cookie('id_user', userid, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
    res.status(200).json({ message: 'Login successful' });
})

app.get('/profile', (req, res) => {
    const userId = req.cookies.user_id;
    if (userId) {
      res.status(200).json({ message: `User ID is ${userId}` });
    } else {
      res.status(401).json({ message: 'Not authenticated' });
    }
});

app.listen(3001,'localhost', () => console.log("start server! port: 3001"));