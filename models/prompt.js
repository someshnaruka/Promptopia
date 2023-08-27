import mongoose, { Schema,model,models } from "mongoose";

const PromptSchema=new Schema({
    creator:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    prompt:{
        type:String,
        required:[true,"{Prompt is Required"]
    },
    tagline:{
        type:String,
        required:[true,"Tag is required"]
    }
});

const Prompt=mongoose.models.Prompt || model("Prompt",PromptSchema);

export default Prompt;