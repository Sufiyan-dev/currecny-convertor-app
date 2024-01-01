import express from 'express';
import dotenv from 'dotenv';
import logger from './src/api/logger/index.js';

dotenv.config();

const app = express();

// req input phraser
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hey');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    logger.info(`App listening to http://localhost:${PORT}`)
);