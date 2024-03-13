import React from 'react'
import { Link, ShoppingCart } from 'phosphor-react'
const Navbar = () => {
  return (
    <div>
        <Link to='/' > Shop</Link>
        <Link to='/cart'> 
        <ShoppingCart size={32}/>
        </Link>
    </div>
  )
}

export default Navbar