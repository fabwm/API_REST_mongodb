import mongoose from "mongoose";

mongoose.connect("mongodb+srv://fmachado:gadita123@cluster0.e2adepk.mongodb.net/Cluster0");

let db = mongoose.connection;

export default db;