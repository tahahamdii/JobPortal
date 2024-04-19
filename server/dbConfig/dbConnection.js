import mongoose from "mongoose";

// Connect to the database
 const  dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to the database");
    } catch (error) {
        console.log("Error connecting to the database", error);
    }
    }  ;


    export default dbConnection;
