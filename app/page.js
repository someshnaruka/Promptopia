import Feed from '@/components/Feed'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <section className='w-full flex  flex-col justify-center items-center'>

<h1 className='head_text text-center'>Discover & Share</h1>
<br className='max-md:hidden'></br>
<span className='orange_gradient text-center text-4xl md:text-5xl font-bold'>AI Powered Prompts</span>
<p className='desc text-center'>Promptopia is a open-source AI prompting tool for modern world to discover, create and share creative prompts.</p>

<Feed></Feed>
   </section>
   </>
  )
}
