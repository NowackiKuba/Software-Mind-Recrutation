import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './db/db';
import continentsRoutes from './routes/continentsRoutes';
import userRoutes from './routes/userRoutes';
dotenv.config();

const app = express();
const PORT = 8080;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(express.json());

sequelize.sync().then(() => console.log('db raedy'));

app.use(cors(corsOptions));
app.use('/api/continents', continentsRoutes);
app.use('/api/form', userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
