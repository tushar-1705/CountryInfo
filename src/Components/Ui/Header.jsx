import React, { useState } from 'react'
import { NavLink , Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  const [show , setShow] = useState(false)

  const handleButtonToggle = () => {
    return setShow(!show)
  }
  return (
    <>
      <header>
        <div className='container'>
            <div className='grid navbar-grid'>
               <div className='Logo'>
                    <NavLink to='/'>
                        <h1>WorldVerse</h1>
                    </NavLink>
               </div>

               <nav className={show ? 'menu-mobile' : 'menu-web'}>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='country'>Country</Link>
                    </li>
                    <li>
                        <Link to='contact'>Contact</Link>
                    </li>
                </ul>
               </nav>

               <div className="ham-menu">
                <button onClick={handleButtonToggle}>
                  <GiHamburgerMenu />
                </button>
               </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
