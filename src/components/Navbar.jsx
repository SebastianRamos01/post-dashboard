import React from 'react'

export default function Navbar() {
  return (
    <div className='w-[400px] m-auto my-2 text-center bg-[#ddbc95] font-josefin'>
        <ul className='flex bg-transparent justify-evenly'>
            <li className='bg-transparent p-1'>
                Home
            </li>
            <li className='bg-transparent p-1'>
                New Post
            </li>
            <li className='bg-transparent p-1'>
                List
            </li>
        </ul>
    </div>
  )
}
