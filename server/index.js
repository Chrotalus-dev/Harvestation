import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cropsRoutes from './routes/crops.js';

const app = express();
dotenv.config();
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/crops', cropsRoutes);

// const CONNECTION_URL = 'mongodb+srv://crop_user:cropping1234@harvestationdb.7ster.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT||5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

