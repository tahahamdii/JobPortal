import mongoose from "mongoose";

// Connect to the database
 const  dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://taha:taha123@cluster0.p5yoqci.mongodb.net/?retryWrites=true&w=majority');
        console.log("Connected to the database");
    } catch (error) {
        console.log("Error connecting to the database", error);
    }
    }  ;


    export default dbConnection;