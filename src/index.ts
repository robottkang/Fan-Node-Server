import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routers';

dotenv.config();

const app = express();
const port: number = Number.parseInt(process.env.PORT!);
const ip: string = process.env.IP!;
const mongoURI = process.env.MONGODB_URI!;

mongoose.connect(mongoURI).catch((err) => {
    console.log(err);
}).then(() => { console.log('DB connected') });

app.use(morgan('dev'));
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}.`);
});
