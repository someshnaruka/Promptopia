import mongoose from "mongoose";

let connected=false;

export const connectDb=async ()=>{
    mongoose.set('strictQuery',true)
console.log("mongo");
    if(connected)
    {
        console.log("Databse is Connected");
        return;
    }

    try{
        console.log("connecting...");
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected...");
        connected=true;
        console.log("Monogodb Connected successfully");
    }
catch(err){
console.log(err);
}
} 