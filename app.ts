import express from 'express';
import md5Router from './routes/md5Router';

const app = express();
app.use(express.json());

app.use('/md5', md5Router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});