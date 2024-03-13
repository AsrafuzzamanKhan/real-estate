import { useState } from 'react'
import './navbar.scss'
const Navber = () => {
    const [open, setOpen] = useState(false)
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
                <a href="/signin">Sign in</a>
                <a href="/signup" className='register'>Sign Up</a>
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