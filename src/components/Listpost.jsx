import React from 'react'
import { useFetch } from '../useFetch'

export default function Listpost() {
  const { data, loading } = useFetch('http://localhost:3001/posts')

  return (
    <div className='border-2 border-black w-[600px] m-auto font-josefin'>
      <div className='bg-transparent text-center underline text-lg'>
        Soy Listpost
      </div>
      <ul className='bg-transparent py-2'>
        {loading && <div className='bg-transparent'>Loading...</div>}
        {data?.map((post) => (
          <li key={post.id} className='bg-transparent flex justify-between'>
            <div className='bg-transparent mx-2'>
              {post.title}
            </div>
            <div className='bg-transparent flex mx-2'>
              <div className='bg-red-400 px-2 h-fit'>
                Delete
              </div>
              <div className='bg-transparent px-2'>
                Edit Post
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
