import React, {useState} from 'react'
import './Create-Page.Style.css'
import {createPost} from '../../../services/posts'

const CreatePage = () => {
  const [input, setInput] = useState({ title: '', content: '', user: '' })
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const handleSubmit = async(e) => {
    e.preventDefault() 
    const post = await createPost(input)
    console.log(post)
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" value={input.title} onChange={handleChange}/>
        <input name="content" value={input.content} onChange={handleChange}/>
        <input name="user" value={input.user} onChange={handleChange} />
        <button>Create</button>
      </form>
    </div>
  )
}

export default CreatePage