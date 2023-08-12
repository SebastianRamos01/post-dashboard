import React, { useState } from 'react'
import { useFetch } from '../useFetch'

export default function Dashboard() {

    const { data } = useFetch('http://localhost:3001/posts')
    const [index, setIndex] = useState()
    const lastPost = data?.slice(-1)

  return (
    <div className='w-[600px] h-[300px] rounded-sm m-auto border-2 border-black text-center font-josefin'>
        <h1 className=' bg-transparent underline p-1 text-[20px]'>
            Dashboard
        </h1>
        <section className='flex flex-wrap justify-around gap-6 bg-transparent'>
                <div className='w-[50%] bg-transparent p-2'>
                    <div className='bg-transparent'>
                        Last Post:
                    </div>
                    {lastPost?.map((post) => (
                        <p key={post.id} className='bg-transparent'>
                            {post.title}
                        </p>
                    ))}
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
