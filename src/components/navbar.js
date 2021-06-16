import {Link} from 'react-router-dom'

const navbar = () => {
    return (
        <div className="nav">
            <div>Blogs</div>
            <ul>
                <li><Link to="/">Home</Link></li>      {/*instead of a nd href we use link and to*/}
                <li><Link to ="/addblog">Add Blog</Link></li>
                <li><Link to= "/about">About</Link></li>
            </ul>
        </div>
    )
}

export default navbar






// const navbar = () => {
//     return (
//         <div className="nav">
//             <div>Blogs</div>
//             <ul>
//                 <li>Home</li>
//                 <li>Add Blog</li>
//                 <li>About</li>
//             </ul>
//         </div>
//     )
// }

// export default navbar