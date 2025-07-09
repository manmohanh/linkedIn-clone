import express from "express";
import { port } from "./config.js";
import "./database/index.js";
import cookieParser from "cookie-parser";
import cors from "cors"


import userRoutes from './routes/user.js'


const app = express();
const PORT = port ?? 8080;


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use("/api/auth",userRoutes)

app.listen(PORT, () => console.log(`listening on port:${PORT}`));
