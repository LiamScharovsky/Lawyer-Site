import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>PARA SERVIRLE A USTED</h1>
      <p> Bienvenido/a a Scharovsky y Scharovsky abogados</p>
      <div className='hero-btns'>
        <Link to='/servicios'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            SERVICIOS
          </Button>
        </Link>
        <Link to='/contactenos'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            CONTACTENOS
          </Button>
        </Link>
      </div>

    </div>
  )
}

export default HeroSection