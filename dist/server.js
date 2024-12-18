"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = __importDefault(require("./src/routes/userRouter"));
const app = (0, express_1.default)();
// Define CORS options
const corsOptions = {
    origin: ["http://localhost:5173", "https://another-site.com"], // Allowed origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    exposedHeaders: ["X-Custom-Header"], // Headers exposed to the browser
    credentials: true, // Allow cookies to be sent
    optionsSuccessStatus: 200, // Status for preflight requests
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use("/api/users", userRouter_1.default);
app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Server alive" });
});
// If this file is the entrypoint/ called directly
if (require.main === module) {
    app.listen(8000, () => {
        console.log("Server running in port 8000");
    });
}
// Useful when using supertest/ jest for testing purpose
exports.default = app;
