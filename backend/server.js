import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "node:path";
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

server.post("/api/sendEmail", sendEmail);

const __dirname = path.resolve();
if (process.env.MODE === "production") {
  server.use(express.static(path.join(__dirname, "/frontend/build")));
  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
