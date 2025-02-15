const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app =express();

const postRouter = require("./routes/post");
const UserRouter = require("./routes/user");
const CommentRouter = require("./routes/comment");
const SearchRouter = require("./routes/search");
const ShowRouter = require("./routes/show")

app.use(bodyParser.json());
app.use(cors());

app.use(postRouter);
app.use(UserRouter);
app.use(CommentRouter);
app.use(SearchRouter);
app.use(ShowRouter);

const PORT = 7800;
const db_url = "mongodb+srv://user2025:user147@cluster0.lgldw.mongodb.net/sitedata";

app.use("/api/users", userRouter);

app.use("/api/reservations", (req, res) => {
    return res.status(200).json({
        message: "Welcome to the reservation API",
    });
});

mongoose.connect(db_url)
    .then(() => {
        console.log("Database is connected");
    })
    .catch((err) => console.log("Database connection error:", err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});