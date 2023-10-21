import multer from "multer";
import dotenv from "dotenv";
import {GridFsStorage} from 'multer-gridfs-storage';

dotenv.config()

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



// Create a storage object with a given configuration
const storage = new GridFsStorage({ url: `mongodb+srv://${USERNAME}:${PASSWORD}@trackerappdb.lne7ucf.mongodb.net/whatsnewdb`,
options: { useUnifiedTopology: true, useNewUrlParser: true },
file: (request, file) => {
    const match = ["image/png", "image/jpg"]
    if(match.indexOf(file.mimeType)=== -1){
        return `${Date.now()}-file-${file.originalname}`
    }
    return {
        bucketName: "photos",
        filename: `${Date.now()}-file-${file.originalname}`
    }
}
});

export default multer({storage})

