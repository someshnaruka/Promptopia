"use client"
import Link from 'next/link';
import React, { useState } from 'react'

function Form(props) {
return (
   <>
<section className='w-full max-w-full flex flex-col justify-start items-start'>

  <h1  className='head_text text-left'>
  <span className='blue_gradient'>{props.type} Post</span></h1>
<p className='desc.text-left'>{props.type} and share amazing prompts with the world, and let your imagination run wild with the AI-powered platform</p>

<form
onSubmit={props.handleSubmit}
className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
<label><span className='font-santoshi font-semibold text-base text-gray-700'>Your AI powered prompt</span></label>
<textarea
name='prompt'
value={props.post.prompt} onChange={(e)=>props.setPost({...props.post,prompt:e.target.value})} rows={4} placeholder='Write your prompt here...' required className='form_textarea'></textarea>
<label><span className='font-santoshi font-semibold text-base text-gray-700'>Tag<span>(#product, #webdevelopment, #idea)</span> </span></label>
<input type='text' required className='form_input' name='tagline' value={props.post.tagline} onChange={(e)=>props.setPost({...props.post,tagline:e.target.value})}></input>

<div className='flex-end mx-3 mb-5 gap-4 '>
  <Link href="/" className='text-gray-500 text-sm'>
    Cancel
  </Link>
  <button type='submit' disabled={props.submitting} className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
{
  props.submitting ? `${props.type}...` : props.type
}
  </button>
</div>
</form>
</section>
   </>
  )
}

export default Form