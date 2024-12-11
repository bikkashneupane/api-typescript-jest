import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./src/routes/userRouter";

const app = express();

// Define CORS options
const corsOptions = {
  origin: ["http://localhost:5173", "https://another-site.com"], // Allowed origins
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  exposedHeaders: ["X-Custom-Header"], // Headers exposed to the browser
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 200, // Status for preflight requests
};

app.use(cors(corsOptions));
app.use(morgan("dev"));

app.use("/api/users", userRouter);

app.get("/", (req: Request, res:Response, next: NextFunction) => {
  res.status(200).json({ message: "Server alive" });
});

// If this file is the entrypoint/ called directly
if (require.main === module) {
  app.listen(8000, () => {
    console.log("Server running in port 8000");
  });
}

// Useful when using supertest/ jest for testing purpose
export default app;
