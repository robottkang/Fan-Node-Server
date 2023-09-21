import express from 'express';
import {Express, Request, Response, NextFunction } from 'express';

const app: Express = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/', (req: Request, res: Response) => {
    res.send("NAGA");
});