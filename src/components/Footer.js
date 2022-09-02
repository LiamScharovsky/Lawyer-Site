import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2><Link to='/'>Inicio</Link></h2>
                        
                    </div>
                    <div class='footer-link-items'>
                        <h2><Link to='/abogados'>Abogados</Link></h2>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2><Link to='/servicios'>Servicios</Link></h2>
                    </div>
                    <div class='footer-link-items'>
                        <h2><Link to='/contactenos'>Contactenos</Link></h2>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            L&S
                            <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>L&S © 2022</small>
                </div>
            </section>
        </div>
    );
}

export default Footer;