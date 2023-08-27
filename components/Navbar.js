"use client"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/assets/images/logo.svg"
import { useEffect, useState } from "react"
import profile from "../public/assets/images/user.png"
import {signIn,signOut,useSession,getProviders} from "next-auth/react"



function Navbar() {

  const { data: session } = useSession()
  const [isLoggedIn,setLogedIn]=useState(true)
const [show,setShow]=useState(false);
const [providers,setProviders]=useState(null);

useEffect(()=>{
  (async () => {
    const res = await getProviders();
    setProviders(res);
  })();
},[])


  return (
    <>
        <nav className="flex flex-between w-full mb-16 pt-3">
          <Link href="/" className="flex gap-2 justify-center">
            <Image src={logo} alt="Promptopia Logo" width={30} height={30} className="object-contain"></Image>
          <p className="logo_text">Promptopia</p>
          </Link>

          {/* desktop nav */}

          <div className="md:flex hidden">
          {
            session?.user ?<div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn">Create Post</Link>
              <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
           <Image src={session?.user.image?session?.user.image:profile} width={50} height={50} alt="Profile Image" className="rounded-full"></Image>
            </div>:<>
              {
                providers && Object.values(providers).map((post)=>{
                  return(
                    <button type="button" key={post.name} className="black_btn" onClick={()=>signIn(post.id)} >Sign In</button>
                  )
                })
              }
            </>
          }
          
          
           </div>

           {/* mobile navigation */}

           <div className="md:hidden flex">
            {
              session?.user? <div>
              <Image src={session?.user.image?session?.user.image:profile} width={50} height={50} alt="Profile Image" className="rounded-full" onClick={()=>setShow((prev)=>!prev)}></Image>
              {
                show && <div className="dropdown">
                  <Link href="/profile" className="dropdpwn_link" onClick={()=>setShow(false)}>My Profile</Link>
                  <Link href="/create-prompt" className="dropdpwn_link" onClick={()=>setShow(false)}>Create Prompt</Link>
                  <button type="button" onClick={()=>{ setShow(false); signOut()}} className="black_btn w-full">Sign Out</button>
                </div>
              }
          
              </div>:<>
              {
                providers && Object.values(providers).map((post)=>{
                  return(
                    <button type="button" key={post.name} className="black_btn" onClick={()=>signIn(post.id)} >Sign In</button>
                  )
                })
              }
            </>
            }
           </div>
        </nav>
    </>
  )
}

export default Navbar