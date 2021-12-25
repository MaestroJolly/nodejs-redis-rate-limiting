import config from "./config";
import express, { Request, Response } from "express";
const app = express();
const port = config.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/:name', (req: Request, res: Response) => {
    res.json({
        version: '1.0',
        message: `Welcome to the application ${req.params.name}`
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});