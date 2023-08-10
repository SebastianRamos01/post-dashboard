import React from 'react'

export default function Postform() {
  return (
    <form action="" className='flex flex-col text-center items-center bg-[#E8C69B] border border-black w-[400px] my-2 rounded-sm'>
        <label htmlFor="" className='my-2 bg-transparent'>
            Title <br />
            <input type="text" className='outline-none border border-black p-1'/>
        </label>
        <label htmlFor="" className='my-1 bg-transparent'>
            Author <br />
            <input type="text"  className='outline-none border border-black p-1'/>
        </label>
        <label htmlFor="" className='my-1 bg-transparent'>
            Post <br />
            <textarea name="" id="" cols="30" rows="10" className='outline-none border border-black p-1'></textarea>
        </label>
        <label htmlFor="" className=' bg-transparent'>
            Fatured
            <input type="checkbox" name="" id="" className='outline-none border border-black mx-2'/>
        </label>
        <input type="submit" value="Post" className='px-8 py-1 m-1 cursor-pointer bg-[#ddbc95] border-black border hover:underline rounded-sm'/>
    </form>
  )
}
