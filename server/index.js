import express  from "express"
import Connection from "./database/db.js"
import Route from './routes/route.js'
import bodyParser from "body-parser"
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Route)

//----------------------------Deployment----------------------------
const __dirname = path.resolve()

const buildPath = path.join(__dirname, '/client/build'); 

app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//------------------------------------Deployment--------------------------
Connection()
const PORT = process.env.PORT || 8000

app.listen(PORT, ()=> console.log(`Server is successfully running on port ${PORT}`));
