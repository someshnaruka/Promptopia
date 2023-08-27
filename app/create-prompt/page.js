"use client"
import Form from "@/components/Form"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

import { set } from "mongoose"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"



function page() {
    const { data: session,status } = useSession()
    const  router=useRouter();
    console.log(session?.user.id);
    const [submitting,setSubmitting]=useState(false);
    const [post,setPost]=useState({
        prompt:"",
        tagline:""
    });

async function createPrompt(e){
    e.preventDefault();
    console.log(post);
setSubmitting(true);

try{
    const response= await fetch("/api/prompt/new",{
        method:"POST",
        body:JSON.stringify({
            userId:session?.user.id,
            prompt:post.prompt,
            tagline:post.tagline,
        })
    })

    if (response.ok)
    {
        toast("Prompt Created Successfully")
        setTimeout(() => {
            router.push("/"); 
        }, 1000);
        
    }
}
catch(err){
    console.log(err);
}
finally{
    setSubmitting(false);
};

}
  return (
    <>
        <Form
        type="Create"
        submitting={submitting}
        post={post}
        setPost={setPost}
        handleSubmit={createPrompt}

        ></Form>
    </>
  )
}

export default page