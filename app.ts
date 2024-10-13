import express from 'express';
import cors from 'cors'; 
import bodyParser from "body-parser";
import md5Router from './routes/md5Router';

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/md5', md5Router);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});