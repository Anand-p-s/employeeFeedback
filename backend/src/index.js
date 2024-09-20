import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
import employeeRoutes from "./routes/employee-routes.js";
import reviewRoutes from "./routes/review-routes.js";

config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
        console.log("app running in port",PORT)
    })
}).catch((err) => {
    console.log(err)
})

app.use("/employee", employeeRoutes)
app.use("/review", reviewRoutes)

export default app;