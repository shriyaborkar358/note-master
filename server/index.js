import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);

  if(conn){
    console.log(`MongoDB connected successfull✅`)
  }
};

connectDB();

app.get("/", (req, res)=>{
    res.json({
        success: true,
        message: "Welcome to Note Master"
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
