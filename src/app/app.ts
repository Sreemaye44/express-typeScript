import express, { Request, Response } from "express";
const app = express();
const port = 3000;

//parser for post json file

app.use(express.text())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello WORLD in my!!!");
});
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message:" successfully received data"
  });
});

export default app;
