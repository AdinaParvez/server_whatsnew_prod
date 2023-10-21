import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@trackerappdb.lne7ucf.mongodb.net/whatsnewdb`
    try{

        await mongoose.connect(URL, { useUnifiedTopology: true })
        console.log('Database connected successfully')
    }catch(error){
        console.log('Error while connecting with the database', error.message)
                // Close the connection on error
                mongoose.connection.close();

    }
}

export default Connection