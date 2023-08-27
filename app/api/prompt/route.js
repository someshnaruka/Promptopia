import Prompt from "@/models/prompt";
import { connectDb } from "@/utils/database"


export const GET= async (req,res)=>{



try{
    await connectDb();
    const prompts=await Prompt.find({}).populate("creator")
console.log(prompts);
    return new Response(JSON.stringify(prompts),{status:200});
}
catch(err)
{
    return new Response("Failed to fetch data",{status:500});
}

}