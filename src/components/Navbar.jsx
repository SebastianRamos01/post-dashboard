import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-[400px] text-center font-amatic absolute bottom-5 right-[490px] bg-black bg-opacity-30'>
        <ul className='flex justify-evenly text-white'>
            <li className='m-1 transition ease-in-out hover:scale-110 duration-300'>
                <Link to={"/"} className='px-5 rounded bg-violet-500'>Home</Link>
            </li>
            <li className='m-1 transition ease-in-out hover:scale-110 duration-300'>
                <Link to={"/new-post"} className='px-5 rounded bg-violet-500'>New Post</Link>
            </li>
            <li className='m-1 transition ease-in-out hover:scale-110 duration-300'>
                <Link to={"/posts"} className='px-5 rounded bg-violet-500'>List</Link>
            </li>
        </ul>
    </div>
  )
}
