import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function EditForm() {
  
  const { id } = useParams()
  const [post, setPost] = useState({
    title: '',
    author: '',
    body: '',
    featured: false
  })
  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost({
        title: data.title,
        author: data.author,
        body: data.body,
        featured: data.featured
      }))
      console.log(post);
  }, [])

  const [checked, setChecked] = useState(true)
  function handleChecked(e) {
    console.log(e.target.checked);
    setChecked(checked)
  }
  function handleData(e) {
    const newData = {...post}
    newData[e.target.id] = e.target.value
    setPost(newData)
    console.log(newData);
  }
  return (
    <form action="" className='flex flex-col w-[400px] items-center text-center my-2'>
      <label htmlFor="" className='my-1'>
        Title  <br />
        <input onChange={(e) => handleData(e)} id='title' value={post.title} type="text" name="" className='border border-[#020617] outline-none p-1' />
      </label>
      <label htmlFor="" className='my-1'>
        Author <br />
        <input onChange={(e) => handleData(e)} id='author' value={post.author} type="text" name="" className='border border-[#020617] outline-none p-1'/>
      </label>
      <label htmlFor="" className='my-1'>
        Post <br />
        <textarea onChange={(e) => handleData(e)} id='body' value={post.body} name="" cols="30" rows="10" className='border border-[#020617] outline-none p-1 resize-none'></textarea>
      </label>
      <label htmlFor="" className='my-1'>
        Featured
        <input onChange={(e) => handleData(e)} id='featured' value={checked} type="checkbox" name="" className='p-1 mx-2'/>
      </label>
      <input type="submit" value="Post" className='px-8 py-1 m-2 cursor-pointer border border-black hover:bg-black hover:text-white'/>
    </form>
  )
}
