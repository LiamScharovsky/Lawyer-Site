import React, {useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        //emailing service has been disabled. Go to emailJS to have it work
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contact'>
            <div className='content'>
                <h1>Contactenos</h1>
                <p>Si tiene alguna consulta o desearia reservar una cita, por favor no dude en contactarnos</p>
                <p>Los horarios de antencion son de Lunes a Jueves, de 10:00 a 19:00</p>
            </div>
            <div className='container'>
                <div className='contact-info'>
                    <div className='box'>
                        <div className='icon'>
                            <i class="fa-solid fa-location-dot" />
                        </div>
                        <div className='text'>
                            <h3>Direccion</h3>
                            <p>12345 Fake Street, Chicago, IL 60657</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <i class="fa-solid fa-phone" />
                        </div>
                        <div className='text'>
                            <h3> Telefono </h3>
                            <p>(786) 991-4791</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <i class="fa-solid fa-inbox" />
                        </div>
                        <div className='text'>
                            <h3> Email </h3>
                            <p>liamscharovsky1@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='contact-form'>
                    <form onSubmit={sendEmail} ref={form}>
                        <h2> Deje un Mensaje </h2>
                        <div className='input-box'>
                            <input type='text' name='name' required='required'></input>
                            <span>Nombre</span>
                        </div>
                        <div className='input-box'>
                            <input type='text' name='email' required='required'></input>
                            <span>Email</span>
                        </div>
                        <div className='input-box'>
                            <textarea required='required' name='message'></textarea>
                            <span>Escriba su mensaje...</span>
                        </div>
                        <div className='input-box'>
                            <input type='submit' value='Enviar' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact