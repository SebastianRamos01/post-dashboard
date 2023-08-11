import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-[400px] text-center border-2 border-black font-josefin m-auto my-5'>
        <ul className='flex bg-transparent justify-evenly'>
            <li className='bg-transparent m-1 '>
                <Link to={"/"} className='py-[5px] px-7 rounded-sm hover:bg-black hover:text-white'>Home</Link>
            </li>
            <li className='bg-transparent m-1'>
                <Link to={"/new-post"} className='py-[5px] px-7 rounded-sm hover:bg-black hover:text-white'>New Post</Link>
            </li>
            <li className='bg-transparent m-1'>
                <Link to={"/posts"} className='py-[5px] px-7 rounded-sm hover:bg-black hover:text-white'>List</Link>
            </li>
        </ul>
    </div>
  )
}
