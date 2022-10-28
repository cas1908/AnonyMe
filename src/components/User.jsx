import {useState, useEffect} from 'react'
import Loading from './Loading'
import {Link} from 'react-router-dom'
import useDocumentTitle from "./useDocumentTitle"

export default function User() {
        useDocumentTitle('Users - AnonyMe')
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    const [loading, isLoading] = useState(false)
    const useFetch = async ()=> {
        isLoading(true)
        const response = 
     await fetch('https://randomuser.me/api/?page={page}&results=50&seed=abc');
         const result = await response.json();
        
        setData(result.results) 
        isLoading(false)
        console.log(data)
        } 
    useEffect(()=>{
            useFetch()
            
        },[page])
    if(loading) {
       return <Loading />
    }
    const pages = [1,2,3,4,5]
    const perPage = 10
    const start = page * perPage - perPage
    const end = perPage * page
    
        const displayUsers = data.slice(start,end).map(anony =>{
            return(
                <div className='user-profile' key={anony.cell}>
                    <img src={anony.picture.medium} alt='avatar-icon' />
                    <section>
                        <h2>{anony.name.first}</h2>
                        <p>{anony.email}</p>
                        <p>{anony.cell}</p>
                        <p>{anony.nat}</p>
                    </section>
                </div>
            )
           })
       return (

           <div className='user'>
               <Link className='navigate' to='/'>Home</Link>
            {displayUsers}
               <div className='pages'>
                    <button disabled={page<=1} onClick={()=>setPage(page=>page -1)}>prev</button>
               {pages.map(index =>{
                   return <button disabled={page==index} key={index} onClick={()=>setPage(index)}>{index}</button>
               })}
               <button disabled={page>=pages.length} onClick={()=>setPage(page=>page +1)}>next</button>
               </div>
               
           </div>
       )
    
}
