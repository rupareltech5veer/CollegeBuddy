import Link from "next/link"
import React from "react"

const Navbar = () => {
    return (
        <div>
            <div className="fixed top-0 w-full flex items-center px-[50px] py-[15px] text-[25px] gap-[20px] justify-around bg-[#2b2b2b] text-white drop-shadow-lg">
                <div className="flex items-center gap-[10px]"><img className="w-[90px]" src="/tempBG.png"></img></div>
                <Link href='/'><div className="hover:font-bold hover:underline cursor-pointer">Home</div></Link>
                {/* <div className="flex-grow"></div> */}
                <div className="hover:font-bold hover:underline cursor-pointer">About</div>
                <div className="hover:font-bold hover:underline cursor-pointer">Contact</div>
                <Link href='/auth/login'><div className="hover:font-bold hover:underline cursor-pointer">Login</div></Link>
            </div>
            <div className="w-full h-[93.68px]"></div>
        </div>
    )
}

export default Navbar