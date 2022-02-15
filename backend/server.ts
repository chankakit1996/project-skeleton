import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { corsOpts, mongoDB } from './config/config';
import router from './routes';

const app = express();

// Body parser middleware
app.use(cors(corsOpts));
app.use(bodyParser.json());
app.use('/api', router);

const port = process.env.PORT || 4000;
const db = mongoDB.URL;

Promise.all([mongoose.connect(db), app.listen(port)])
    .then(() => {
        console.log(`DB is connected`);
        console.log(`Server is started at ${port}`);
    })
    .catch((err) => {
        console.error(err);
    });
