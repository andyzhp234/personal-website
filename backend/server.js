import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sendEmail from "./services/Email.js";

dotenv.config();
const server = express();

server.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// only needed when submitting with application/ x-www-form-urlencoded
server.use(express.urlencoded({ extended: false }));
// parse request body to JSON format
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Server is Running");
});

server.post("/api/sendEmail", sendEmail);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
