import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
const configurations = {
  db: 'mongodb+srv://JavaScript:<password>@cluster0.0sk6apr.mongodb.net/Week5',
  password: 'wNOSz3bM5BMrC704',
  username: 'JavaScript',
};
const PORT = process.env.PORT || 3000;
const DB = configurations.db.replace('<password>', configurations.password);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log('Connected successfully running on 3000')
    );
  })
  .catch((err) => {
    console.log(err.message);
  });
