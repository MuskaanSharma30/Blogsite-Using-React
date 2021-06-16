import React from 'react'
import {Link} from 'react-router-dom'

const blogs = ({blog}) => {
    return (
        <div className = "blogs">
            <Link to = {`/display/${blog.id}`}>
                <h2>{blog.title}</h2>
                <div className = "auth">- {blog.author}</div>
                <div className = "body">{blog.body}</div>
            </Link>
        </div>
    )
}

export default blogs








// import React from 'react'

// const blogs = ({blog}) => {
//     return (
//         <div className = "blogs">
            
//                 <h2>{blog.title}</h2>
//                 <div className = "auth">- {blog.author}</div>
//                 <div className = "body">{blog.body}</div>
            
//         </div>
//     )
// }

// export default blogs

