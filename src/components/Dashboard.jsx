import React from 'react'
import { useFetch } from '../useFetch'

export default function Dashboard() {

    const { data } = useFetch('http://localhost:3001/posts')
    const lastPost = data?.slice(-1)
    const lengthPosts = data?.length
    const featuredPosts = data?.filter(post => 
        post.featured === true)
    const lengthFeatured = featuredPosts?.length

  return (
    <div className='w-[600px] p-4 my-[70px] m-auto border-2 border-[#020617] text-[#020617] text-center font-josefin'>
        <h1 className='underline p-1 text-[25px]'>
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
                    {lengthPosts}
                </div>
            </div>
            <div className='w-[50%] bg-transparent p-2'>
                <h1 className=' bg-transparent'>
                    Number of Featured Posts:
                </h1>
                <div className=' bg-transparent'>
                    {lengthFeatured}
                </div>
            </div>
        </section>
    </div>
  )
}
