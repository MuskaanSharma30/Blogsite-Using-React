import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import {useState} from 'react'

const AddBlog = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [body, setBody] = useState("")
    const back = useHistory()
    const Submit = async (e) => {
        e.preventDefault()
        const newBlog = {title,author,body}
        await axios.post("http://localhost:4000/blogs",newBlog)
        back.push("/")
    }
    return (
        <div>
            <form onSubmit = {Submit}>
                <label>Title</label>
                <input type="text"
                  required 
                  value = {title}
                  onChange = {(e) => {
                      setTitle(e.target.value)
                  }}
                />
                   <label>Author</label>
                <input type="text"
                  required 
                  value = {author}
                  onChange = {(e) => {
                      setAuthor(e.target.value)
                  }}
                />
                   <label>Body</label>
                <textArea type="text"
                  required 
                  value = {body}
                  onChange = {(e) => {
                      setBody(e.target.value)
                  }}
                />
                <button>ADD</button>
            </form>

        </div>
    )
}

export default AddBlog
