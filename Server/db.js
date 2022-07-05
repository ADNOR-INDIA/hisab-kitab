import mongoose from 'mongoose'

const mongoURI = "mongodb://localhost:27017"

const connectToMongodb = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to database successfully");
    })
}


export default connectToMongodb;