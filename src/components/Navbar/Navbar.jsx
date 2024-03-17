import { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom';
const Navber = () => {
    const [open, setOpen] = useState(false);
    const user = true
    return (
        <nav className='navbar'>
            <div className="left">
                <a href='/' className='logo'>
                    <img src="/logo.png" alt="" />
                    <span>Estate</span>
                </a>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/agents">Agents</a>
            </div>
            <div className="right">
                {user ? <div className='user'>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <span>John Deo</span>
                    <Link to='/profile' className='profile'>
                        <div className="notification">
                            3
                        </div>
                        <span>Profile</span>
                    </Link>
                </div> : (<><a href="/signin">Sign in</a>
                    <a href="/signup" className='register'>Sign Up</a></>)}
                <div className="menuIcon">
                    <img src="/menu.png" alt="menu" onClick={() => setOpen(!open)} />
                </div>
                <div className={open ? 'menu active' : 'menu'}>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/agents">Agents</a>
                    <a href="/signin">Sign in</a>
                    <a href="/signup" >Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navber