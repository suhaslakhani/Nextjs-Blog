// import Image from "next/image";
import Link from "next/link";
import Navbar from "./navblog"

import HomePage from "./homepage/HomePage"

export default function Home() {
  return(
    <main className="">
      {/* <Navbar /> */}
      <div className="container mx-auto">

        <Link href="/blog">
          <p className="text-4xl my-20  p-5 shadow-xl">My First Blog</p>
        </Link>

        <HomePage />


    
      </div>
      
    </main>
  )
}
