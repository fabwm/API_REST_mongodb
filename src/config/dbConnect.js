import mongoose from "mongoose";

mongoose.connect("mongodb+srv:*MongoServer*);

let db = mongoose.connection;

export default db;
