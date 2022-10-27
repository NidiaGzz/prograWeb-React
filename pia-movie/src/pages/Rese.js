import { Button } from '@mui/material';
import React, { useState } from 'react'
import '../components/Card.css'
import Navbar from "../components/Navbar/Navbar";

export const Card = () => {

    const [name, setName] = useState('Nombre');
    const [user, setUser] = useState('usuario');
    const [email, setEmail] = useState('correo');

    return (

        <header>
            <Navbar />
            
            <div className='contenedor'>
                <div className='cont-cards'>
                    <div className='Card2'>

                        <h1>PELICULA</h1>
                        <h4>Persona</h4>
                        <h4>blablablabkla bla bla blabla</h4>

                    </div>
                    <div className='Card2'>

                        <h1>PELICULA</h1>
                        <h2>Persona</h2>
                        <h4>blablablabkla bla bla blabla</h4>

                    </div>
                    <div className='Card2'>
                        <h1>PELICULA</h1>
                        <h2>Persona</h2>
                        <h4>blablablabkla bla bla blabla</h4>

                    </div>
                    <div className='Card2'>

                        <h1>PELICULA</h1>
                        <h2>Persona</h2>
                        <h4>blablablabkla bla bla blabla</h4>

                    </div>

                    <div className='Card2'>

                        <h1>PELICULA</h1>
                        <h2>Persona</h2>
                        <h4>blablablabkla bla bla blabla</h4>

                    </div>

                </div>
            </div>

        </header>

    )
}

export default Card
