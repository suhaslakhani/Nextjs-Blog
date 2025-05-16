export default function Navbar(){
    return (
        <div className="flex justify-around items-center my-5 p-5 border-b-[1px]">
            <div className=""> 
                <p className="text-4xl "><a className="hover:underline " href="">Echo</a>.</p>  
            </div>   
            <div className="px-20 text-2xl">
                <div className="">
                    <a className="px-2 hover:underline hover:" href="">Home</a>
                    <a className="px-2 hover:underline" href="">author</a>
                    <a className="px-2 hover:underline" href="">Contact us</a>
                    <a className="px-2 hover:underline" href="">About us</a>
                </div>
            </div>       
            <div className="flex justify-center text-2xl bg-black">
                <button className="bg-black text-white px-4 py-2 rounded-xl" type="button"><a href="">Login</a></button>
                <p className="text-white pt-2 text-3xl ">/</p>
                <button className="text-white px-4 py-2" type="button"><a href="">Signup</a></button>
            </div> 
        </div>
    )
}