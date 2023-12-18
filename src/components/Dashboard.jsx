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
    <div className='bg-gradient-to-br from-black to-violet-950 h-screen font-amatic flex'>
        <div className='w-[600px] h-[400px] p-4 my-10 m-auto bg-black bg-opacity-30 text-white text-center font-josefin'>
            <h1 className='p-1 text-[34px]'>
                In Universe Dashboard
            </h1>
            <section className='flex flex-wrap justify-around gap-6'>
                    <div className='w-[50%] p-2 text-xl'>
                        <div className=''>
                            Last Post:
                        </div>
                        {lastPost?.map((post) => (
                            <p key={post.id} className=''>
                                {post.title}
                            </p>
                        ))}
                    </div>
                <div className='w-[50%] p-2 text-xl'>
                    <h1 className=''>
                        Number of Posts:
                    </h1>
                    <div className=''>
                        {lengthPosts}
                    </div>
                </div>
                <div className='w-[50%] p-2 text-xl'>
                    <h1 className=''>
                        Number of Featured Posts:
                    </h1>
                    <div className=''>
                        {lengthFeatured}
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
