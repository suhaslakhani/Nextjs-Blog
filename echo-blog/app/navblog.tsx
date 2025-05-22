import Link from "next/link"
import { useNavigate } from "react-router-dom"

export default function Navbar(){
    return (
        <div className="flex justify-around items-center my-5 p-5 border-b-[1px]">
            <div className=""> 
                <p className="text-4xl "><a className="hover:underline " href="/">Echo</a>.</p>  
            </div>   

            <div className="px-20 text-2xl">
                <div className="">
                    <Link href='/'>Home</Link>
                    <Link href="/">Blog</Link>
                    
                </div>
            </div>

        </div>
    )
};