// import Image from "next/image";
import Link from "next/link";
import Navbar from "./navblog"

import HomePage from "./homepage/HomePage"

export default function Home() {
  return(
    <main className="">
      {/* <Navbar /> */}
      <div className="container mx-auto">

        <HomePage />


    
      </div>
      
    </main>
  )
}
