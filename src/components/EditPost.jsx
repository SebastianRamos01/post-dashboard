import React, { useEffect, useState } from 'react'
import EditForm from './EditForm'
import { useFetch } from '../useFetch'
import { useParams } from 'react-router-dom'

export default function EditPost() {

    const { id } = useParams()
    const [postTitle, setPostTitle] = useState('')
    useEffect(() => {
        fetch(`http://localhost:3001/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostTitle(data.title))
    }, [])

  return (
    <div className='flex flex-col items-center border-2 border-black font-josefin w-[600px] m-auto'>
        <div>
            Soy {postTitle}
        </div>
        <EditForm></EditForm>
    </div>
  )
}
