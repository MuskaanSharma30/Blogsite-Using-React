import axios from 'axios'
import React from 'react'
import {useParams,useHistory} from 'react-router-dom'
import useFetch from '../useFetch'


const Displayblog = () => {
    const {id} = useParams() //useParams helps us to access the id 
    const {data:blog,error,loading} = useFetch(`http://localhost:4000/blogs/${id}`)
    const back = useHistory()
    const Delete = async () => {
         await axios.delete(`http://localhost:4000/blogs/${id}`)
         back.push("/")
    }
    return (
        <div>
            {
                loading && <h2>Fetching data</h2>
            }
            {
                error && <h2>{error}</h2>
            }
            {
                blog && (<div>
                    <h2>{blog.title}</h2>
                    <h3>- {blog.author}</h3>
                    <div>{blog.body}</div>
                    <button onClick = {Delete}>Delete</button>
                </div>)
            }
        </div>
    )
}

export default Displayblog
