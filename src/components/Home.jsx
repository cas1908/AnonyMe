import {Link, Outlet} from 'react-router-dom'
import useDocumentTitle from "./useDocumentTitle"

export default function Home() {
    useDocumentTitle('Home - AnonyMe')
    return (
        <div className='home'>
            <h1>AnonyMe</h1>
            <Link className="navigate" to='/'>Home </Link>
            <Link className="navigate" to='/user'>Users</Link>
            <img src='unknown-removebg.png' alt='hero-image' />
            <h2 className='welcome'>Welcome to the world of "aliases"</h2>
            <Link className="navigate users" to='users'>Click to view User details format</Link>
            <section className='child'>
                
                
                <Outlet />
            </section>
            
        </div>
    )
}