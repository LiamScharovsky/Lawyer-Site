import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [ click, setClick ] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
                  <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
                    <h1>L&S</h1>
                    <i class='fab fa-typo3' />
                    {/* <img src="../../public/Logo.png" alt="R&R" className='logo'/> */}
            </Link>
            <div className='menu-icon' >
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'}
                      onClick={handleClick}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Inicio
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/abogados' className='nav-links' onClick={closeMobileMenu}>
                        Abogados
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/servicios' className='nav-links' onClick={closeMobileMenu}>
                        Servicios
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contactenos' className='nav-links' onClick={closeMobileMenu}>
                        Contactenos
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar