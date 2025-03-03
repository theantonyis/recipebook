import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import recipeRoutes from './src/routes/recipe.routes';

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use('/api/recipes', recipeRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
