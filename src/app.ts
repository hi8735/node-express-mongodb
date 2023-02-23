import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
});
