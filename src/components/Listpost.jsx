import React from 'react'
import { useFetch } from '../useFetch'
import { Link } from 'react-router-dom'

export default function Listpost() {
  const { data, loading } = useFetch('http://localhost:3001/posts')
  console.log(data);

  return (
    <div className='border-2 border-[#020617] text-[#020617] w-[600px] p-4 m-auto font-josefin'>
      <div className='bg-transparent text-center underline text-lg'>
        Soy Listpost
      </div>
      <ul className='bg-transparent py-2'>
        {loading && <div className='bg-transparent'>Loading...</div>}
        {data?.map((post) => (
          <li key={post.id} className='bg-transparent flex justify-between p-[1px]'>
            <Link to={`/posts/${post.id}`}>To Post</Link>
            <div className='bg-transparent mx-2'>
              {post.title}
            </div>
            <div className='bg-transparent flex mx-2'>
              <div className='bg-red-400 px-2 h-fit text-[#020617]'>
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
