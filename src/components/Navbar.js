import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout} from'../hooks/useLogout'
import '../styles/navbar.css'

export default function Navbar() {
  const {logout} = useLogout()
  return (
    <nav>
      <h1>My Journal</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li onClick={logout}>Logout</li>
      </ul>
    </nav>
  )
}
