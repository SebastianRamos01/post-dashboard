import React from 'react'
import Postform from './Postform'

export default function Addpost() {
  return (
    <div className='bg-gradient-to-br from-black to-violet-950 font-amatic flex'>
      <div className='flex flex-col items-center text-white w-[600px] m-auto my-8 bg-black bg-opacity-30'>
          <p className='py-2 text-[34px]'>Add Post</p>
          <Postform></Postform>
      </div>
    </div>
  )
}
