import Blogs from "./blogs"
import useFetch from "../useFetch" //../ means coming out of the current folder

const Homepage = () => {
const {data:blogs,error,loading} = useFetch("http://localhost:4000/blogs") // data:blogs gives another name to data this is known as alias
         return (
           <div>
              {
                   loading && <h3>Loading</h3> //checks if loading is true
              }
              {
                  error && <h3>{error}</h3> //displays the actual error
              }
               { //checks if blogs are present or not
                   blogs && blogs.map((item) => 
                   {
                       return(
                           <Blogs
                             key = {item.id}
                             blog = {item}
                           />
                       )
                   })
               }
           </div>
       )
   }
   

export default Homepage








// import Blogs from "./blogs"
// import {useState, useEffect} from 'react'
// import axios from "axios"
// const Homepage = () => {
//     const[blogs,setBlog] = useState("") 
//     useEffect(() => {
//         const fetchData = async () => {
//          try{
//             const res= await axios.get("http://localhost:4000/blogs")
//             console.log(res)
//             setBlog(res.data)
//          }
//          catch(err){
//              console.log(err.message)
//          }
//         }
//         fetchData()
//     },[])

//          console.log(blogs)
//          return (
//            <div>
//                {
//                    blogs.map((item) => 
//                    {
//                        return(
//                            <Blogs
//                              key = {item.id}
//                              blog = {item}
   
//                            />
//                        )
//                    })
//                }
//            </div>
//        )
//    }
   

// export default Homepage
