import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.MONGODB_URL || ''
console.log("mongoDB_URI", DB_URI)

mongoose.connect(DB_URI, {
  dbName: 'Users'
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default db;