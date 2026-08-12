const express = require("express");
const cors = require("cors");

const globalErrorHandler = require("./controllers/error.controller");
const AppError = require("./utils/appError");
const homeRouter = require("./routes/home.routes");

const app = express();

let corsOptions = {
    origin: '*' // Noncompliant
};
// Middleware
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Backend API is running",
    });
});

app.use("/api/home", homeRouter);

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
    });
});

// FOR WRONG URLS THAT'S NOT DEFINED ON THIS SERVER
app.use( (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!!`, 404));
});

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

module.exports = app;