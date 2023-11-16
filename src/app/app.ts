import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

//parser for post json file

app.use(express.text());
app.use(express.json());

//Router

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", userRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  });
});
courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: "User is created successfully",
    data: course,
  });
});

//middleware

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.body, req.method, req.hostname);
  next();
};

app.get("/:userId/:subId", (req: Request, res: Response) => {
  //using params
  console.log(req.params);
  console.log(req.params.userId);
  res.send("Hello WORLD in my!!!");
});
app.get("/", logger, (req: Request, res: Response) => {
  //using params
  console.log(req.query.email);
  console.log(req.query.name);

  res.send("Hello WORLD in my!!!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: " successfully received data",
  });
});

export default app;
