import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
dotenv.config({});

// call database connection here

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:8080",
    credentials:true
}))
// apis
app.use("/api/v1/user", userRoute);


app.get("/home", (_, res) => {
    res.status(200).json({
        success:true,
        message:"Hello I am coming from backed"
    })
});
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})