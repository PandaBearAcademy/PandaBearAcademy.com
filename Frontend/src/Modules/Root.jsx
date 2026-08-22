/** 
 * Root component for handling initial routing.
 * In the future, this component can be expanded to include authentication
 * checks or other logic before redirecting users to the appropriate page.
 */

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function Root(){
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/home')
    },[])
    return(
        <></>
    )
}