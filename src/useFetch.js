import {useState, useEffect} from "react"
import axios from "axios"

const useFetch = (url) => {
    const[data,setData] = useState("") 
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState("")
    useEffect(() => { 
        const fetchData = async () => {
         try{
            const res= await axios.get(url)
            console.log(res)
            setData(res.data)
            setLoading(false)
            setError("")
         }
         catch(err){
             console.log(err.message)
             setError(err.message)
             setLoading("")
         }
        }
        fetchData()
    },[url])
    return { //objects
        data,
        error,
        loading
    }

}

export default useFetch
 