import mongoose from 'mongoose';

const DB_URI = process.env.MONGODB_URL || ''
console.log("mongoDB_URI", DB_URI)

mongoose.connect(DB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default db;