import express, { Request, Response } from "express";
const app = express();
import routes from './routes';


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

export default app;