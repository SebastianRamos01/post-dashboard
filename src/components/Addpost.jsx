import React from 'react'
import Postform from './Postform'

export default function Addpost() {
  return (
    <div className='bg-[#ddbc95] flex flex-col items-center font-josefin w-[600px] m-auto'>
        <p className='bg-transparent py-2 underline'>Add Post</p>
        <Postform></Postform>
    </div>
  )
}
