import express from 'express';
import { bookingRouter } from './routes/all-routes.js';
import mongoose from 'mongoose';
import 'dotenv/config';


// Connect database

await mongoose.connect(process.env.MONGO_URI);


const app = express();


// Use Routes

app.use(express.json());
app.use(bookingRouter);



// Listen to the port
app.listen(3002,  function() {
    console.log('Server is running  on port 3002')
});

