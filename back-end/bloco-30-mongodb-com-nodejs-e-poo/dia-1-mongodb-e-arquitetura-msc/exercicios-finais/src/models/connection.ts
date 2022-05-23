import mongoose from "mongoose";

const connection = (url = 'mongodb://localhost:27017/world_cups') => mongoose.connect(url);

export default connection;