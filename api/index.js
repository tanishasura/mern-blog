import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Routes/user.route.js";
import authRoutes from "./Routes/auth.route.js";
import postRoutes from './Routes/post.route.js';
import commentRoutes from './Routes/comment.route.js';
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());


const __dirname = path.resolve(); 


//***********MIDDLEWARE*************//
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});

//****************PORT***************//
app.listen(5000, () => {
  console.log("Server is running on port 5000!!");
});


// **********ROUTES**********//

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

//***************MONGODB******************//
const connectDb = async () => {
  try { const conn = await mongoose.connect(process.env.MONGO);
    console.log(`Connected to MongoDB database ${conn.connection.host}`);
  } catch (error) { console.log(error); }
};
connectDb();