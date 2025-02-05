import express from "express";
import cors from "cors";
import { connectDB } from "./db/dbConnection.js";
import { errMiddleware } from "./error/error.js";
import router from "./routes/reservationRoute.js";

const app = express();

// Replace '*' with the specific origin of your frontend
const allowedOrigin = "https://restuarant-backend-3fl1.onrender.com"; // Update this with your frontend's URL

app.use(cors({
    origin: allowedOrigin, // Allow only the frontend's origin
    methods: ["GET", "POST"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers)
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Reservation routes
app.use("/reservation", router);

// Connect to the database
connectDB();

// Error-handling middleware
app.use(errMiddleware);

export default app;
