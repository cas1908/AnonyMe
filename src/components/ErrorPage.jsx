import {Link} from 'react-router-dom'
import '../App.css'
export default function ErrorPage() {
    return (
        <div className='error_bg'>
            <Link to='/'>Go Back Home </Link>
        </div>
    )
}