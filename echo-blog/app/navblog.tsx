import Link from "next/link"
import { useNavigate } from "react-router-dom"

export default function Navbar(){
    return (
        <div className="flex justify-between items-center my-4 p-5 border-b-[1px]">
            <div className=""> 
                <p className="text-4xl pl-40"><a className="hover:underline " href="/">Echo</a>.</p>  
            </div>   

            <div className="px-20 text-2xl ">
                <div className="pr-32">
                    <Link href='/' className="pr-3">Home</Link>
                    <Link href="/">Blog</Link> 
                </div>
            </div>

        </div>
    )
};