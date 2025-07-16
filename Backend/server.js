import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/Mongoodb.js';

import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import contactRouter from './routes/contactRoutes.js'; // ✅ added

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

// API routes
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/contact', contactRouter); // ✅ this is the fix

app.get('/', (req, res) => {
    res.send("API is Working");
});

app.listen(port, () => console.log(`Server started on PORT ${port}`));
