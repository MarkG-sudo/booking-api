import express from 'express';
import { bookingRouter } from './routes/all-routes.js';


const app = express();


// Define Routes

// app.get('/booking', function(req, res, next) {
//     console.log(req.headers);
//     res.json('Get all booking');

// });

app.use(bookingRouter)


// Listen to the port
app.listen(3002,  function() {
    console.log('Server is running  on port 3002')
})

