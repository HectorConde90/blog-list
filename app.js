import express from 'express'
import cors from 'cors'
// import mongoose from 'mongoose'

// importacion de rutas
import blogRoute from './routes/blogRoute.js'



// Express iniciado
const app = express()


// Middlewares
app.use(cors())
app.use(express.json())

// Rutas
app.use('/api/blogs', blogRoute)


// Servidor empieza a escuchar
const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});