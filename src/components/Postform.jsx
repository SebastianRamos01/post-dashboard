import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Postform() {

    const [data, setData] = useState({
        title: '',
        author: '',
        body: '',
        featured: false
    })
    const goToList = useNavigate()

    function handleData(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: data.title,
                author: data.author,
                body: data.body,
                featured: data.featured
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {console.log(data)})
            .finally(() => goToList('/posts'))
            .catch((err) => { console.log(err);})
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col text-center items-center shadow-md w-[400px] my-2 rounded-sm'>
        <label htmlFor="" className='my-1 bg-transparent'>
            Title <br />
            <input onChange={(e) => handleData(e)} id='title' value={data.title} type="text" required className='outline-none border border-black p-1'/>
        </label>
        <label htmlFor="" className='my-1 bg-transparent'>
            Author <br />
            <input onChange={(e) => handleData(e)} id='author' value={data.author} type="text" required className='outline-none border border-black p-1'/>
        </label>
        <label htmlFor="" className='my-1 bg-transparent'>
            Post <br />
            <textarea onChange={(e) => handleData(e)} id='body' value={data.body} name="" required cols="30" rows="10" className='outline-none border border-black p-1'></textarea>
        </label>
        <label htmlFor="" className=' bg-transparent'>
            Fatured
            <input onChange={(e) => handleData(e)} id='featured' value={data.featured} type="checkbox" name="" className='outline-none border border-black mx-2'/>
        </label>
        <input type="submit" value="Post" className='px-8 py-1 m-2 cursor-pointer border border-black hover:bg-black hover:text-white'/>
    </form>
  )
}
