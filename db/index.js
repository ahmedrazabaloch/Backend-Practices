import mongoose from "mongoose";
import 'dotenv/config';

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ahmed01.vrefk1u.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Ahmed01`

mongoose.connect(url)

export default mongoose;