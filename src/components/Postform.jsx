import React from 'react'

export default function Postform() {
  return (
    <form action="" className='flex flex-col text-center items-center bg-white border w-[400px] my-2 rounded-sm'>
        <label htmlFor="" className='my-2'>
            Title <br />
            <input type="text" className='outline-none border border-black'/>
        </label>
        <label htmlFor="" className='my-1'>
            Author <br />
            <input type="text"  className='outline-none border border-black'/>
        </label>
        <label htmlFor="" className='my-1'>
            Post <br />
            <textarea name="" id="" cols="30" rows="10" className='outline-none border border-black'></textarea>
        </label>
        <label htmlFor="" className=''>
            Fatured
            <input type="checkbox" name="" id="" className='outline-none border border-black mx-2'/>
        </label>
        <input type="submit" value="Post" className='border px-8 py-1 m-1 cursor-pointer bg-[#ddbc95] hover:border-black rounded-sm'/>
    </form>
  )
}
