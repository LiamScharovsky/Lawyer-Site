import React from 'react'
import './Services.css'
function Services() {
  return (
    <div className='containerS'>
        <h1>Nuestros Servicios</h1>
        <div className='rowS'>
            <div className='serviceS'>
                <i class="fa-solid fa-person-digging"/>                
                <h2>Accidentes de Trabajo</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            </div>
              <div className='serviceS'>
                  <i class="fa-solid fa-file"/>
                  <h2>Despidos</h2>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
              <div className='serviceS'>
                  <i class="fa-solid fa-scroll"/>
                  <h2>Sucesiones</h2>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
              <div className='serviceS'>
                  <i class="fa-solid fa-briefcase"/>                  
                  <h2>Laboral</h2>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
              <div className='serviceS'>
                  <i class="fa-solid fa-person"/>
                  <h2>Civil</h2>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
              <div className='serviceS'>
                  <i class="fa-solid fa-bag-shopping"/>
                  <h2>Comercial</h2>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
              <div className='serviceS'>
                  <i class="fa-solid fa-house"/>                  
                  <h2>Derecohs de Familia</h2>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
              <div className='serviceS'>
                  <i class="fa-solid fa-gavel"></i>
                  <h2>Penal</h2>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
        </div>
    </div>
  )
}

export default Services