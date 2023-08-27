import Prompt from "@/models/prompt";
import { connectDb } from "@/utils/database"

export const POST= async (req,res)=>{
  const {userId,prompt,tagline}= await req.json();
 try{
    await connectDb();
    const newPrompt=new Prompt({
        creator:userId,
        prompt,
        tagline,
    });
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt),{status:201});
 }
 catch(err){
    return new Response("Failed to create a prompt",{status:500})
 }
}