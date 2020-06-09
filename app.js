import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import mongo from './data/mongodb/mongo.js'
import errorMiddleware from './middleware/error-middleware.js'

dotenv.config();
// importacion de rutas
import blogRoute from './routes/blogRoute.js'



// Express iniciado
const app = express();


// Middlewares
app.use(cors());
app.use(express.json());

// Middlewares de errores
app.use(errorMiddleware.logError);
app.use(errorMiddleware.clientErrorHandler);
app.use(errorMiddleware.errorHandler);


// Rutas
app.use('/api/blogs', blogRoute);


// Servidor empieza a escuchar
const PORT_ENV = process.env.PORT;

const PORT = process.env.PORT || PORT_ENV
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});