import React from 'react'
import Postform from './Postform'

export default function Addpost() {
  return (
    <div className='flex flex-col items-center border-2 border-black font-josefin w-[600px] m-auto'>
        <p className='bg-transparent py-2 underline'>Add Post</p>
        <Postform></Postform>
    </div>
  )
}
