"use client"

import { useEffect, useState } from "react"
import PromptCard from "./PromptCard";


function Feed() {

const [searchText,setSearchhText]=useState("");
const [post,setPost]=useState([])
useEffect(()=>{
   async function fetchPost(){
    const response= await fetch("/api/prompt");
    const data=await response.json();
   
    setPost(data)
   }

   fetchPost();
  
  },[])
  console.log(post, "prompt data");
function handleSearchChnage(e){
 
}


  return (
   <>
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text" className="search_input peer" required value={searchText} onChange={handleSearchChnage} placeholder="Search for a tag or username"></input>
      </form>

      <div className="mt-16 prompt_layout">
      {
        post.map((post)=>{
          return(  <PromptCard
          key={post._id}
          post={post}></PromptCard>)
        
        })
      }

      </div>
    </section>
   </>
  )
}

export default Feed