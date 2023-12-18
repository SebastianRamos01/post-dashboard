import React from 'react'
import { useFetch } from '../useFetch'
import { Link } from 'react-router-dom'

export default function Listpost() {
  const { data, loading } = useFetch('http://localhost:3001/posts')
  console.log(data);

  return (
    <div className='bg-gradient-to-br from-black to-violet-950 font-amatic flex'>
      <div className='text-white w-[600px] p-4 m-auto my-8 bg-black bg-opacity-30'>
        <div className='text-center text-[34px]'>
          List of Posts
        </div>
        <ul className='py-2 text-xl'>
          {loading && <div className=''>Loading...</div>}
          {data?.map((post) => (
            <li key={post.id} className='flex justify-between p-[1px]'>
              <Link className='bg-violet-500 px-1 rounded' to={`/posts/${post.id}`}>To Post</Link>
              <div className='mx-2'>
                {post.title}
              </div>
              <div className='flex mx-2'>
                <div className='bg-red-400 px-2 h-fit text-[#020617]'>
                  Delete
                </div>
                <div className='px-2'>
                  Edit Post
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
