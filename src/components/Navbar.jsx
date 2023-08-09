import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-[400px] text-center bg-[#ddbc95] font-josefin absolute bottom-8 left-[140px]'>
        <ul className='flex bg-transparent justify-evenly'>
            <li className='bg-transparent m-1 hover:underline'>
                <Link to={"/"} className='px-1 bg-transparent'>Home</Link>
            </li>
            <li className='bg-transparent m-1 hover:underline'>
                <Link to={"/new-post"} className='px-1 bg-transparent'>New Post</Link>
            </li>
            <li className='bg-transparent m-1 hover:underline'>
                <Link to={"/posts"} className=' px-1 bg-transparent'>List</Link>
            </li>
        </ul>
    </div>
  )
}
