import React from 'react'

export default function Dashboard() {
  return (
    <div className='w-[600px] h-[300px] rounded-sm m-auto bg-[#ddbc95] text-center font-josefin'>
        <h1 className=' bg-transparent underline p-1 text-[20px]'>
            Dashboard
        </h1>
        <section className='flex flex-wrap justify-around bg-transparent'>
            <div className='w-[50%] bg-transparent p-2'>
                <div className='bg-transparent'>
                    Last Post:
                </div>
                <p className='bg-transparent'>
                    Post title
                </p>
            </div>
            <div className='w-[50%] bg-transparent p-2'>
                <h1 className=' bg-transparent'>
                    Number of Posts:
                </h1>
                <div className=' bg-transparent'>
                    12
                </div>
            </div>
            <div className='w-[50%] bg-transparent p-2'>
                <h1 className=' bg-transparent'>
                    Number of Featured Posts:
                </h1>
                <div className=' bg-transparent'>
                    4
                </div>
            </div>
        </section>
    </div>
  )
}
