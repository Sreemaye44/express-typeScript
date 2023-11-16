"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parser for post json file
app.use(express_1.default.text());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello WORLD in my!!!");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: " successfully received data"
    });
});
exports.default = app;
