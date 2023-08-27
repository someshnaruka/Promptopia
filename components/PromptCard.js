"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import tick from "../public/assets/icons/tick.svg"
import copied from "../public/assets/icons/copy.svg"
import { usePathname,useRouter } from 'next/navigation'


function PromptCard({post}) {


const [copy,setCopy]=useState("");


function handleTagclick(){

}

function handleCopy(){

  setCopy(post.prompt);
  navigator.clipboard.writeText(post.prompt);
  setTimeout(() => {
    setCopy("")
  }, 3000);
  console.log(copy);
  
}
  return (
   <>
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image src={post.creator.image} width={40} height={40} alt='creator Image' className='rounded-full object-contain'></Image>
          <div className='flex flex-col'>
            <h3 className='font-santoshi font-semibold text-gray-900'>{post.creator.username}</h3>
            <p className='font-inter text-sm text-gray-500'>{post.creator.email}</p>
          </div>
          
        </div>
        <div className='copy_btn' onClick={handleCopy}>
            <Image src={copy===post.prompt ? tick : copied} alt="copy text" width={12} height={12}></Image>
          </div>
      </div>
      <p className='my-4 font-santoshi text-sm text-gray-700'>{post.prompt}</p>
      <p className='font-inter blue_gradient text-sm cursor-pointer' onClick={()=>{handleTagclick && handleTagclick(post.tagline)}}>{post.tagline}</p>
    </div>
   </>
  )
}

export default PromptCard