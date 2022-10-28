import { Button } from '@mui/material';
import React, { useState } from 'react'
import '../components/Card.css'
import Navbar from "../components/Navbar/Navbar";
import styles from './Catalogo.module.css';

export const Card = () => {

    const [name, setName] = useState('Nombre');
    const [user, setUser] = useState('usuario');
    const [email, setEmail] = useState('correo');

    return (
        <div>
            <header>
                <Navbar />
                <h1 className={styles.title}>RESEÑAS</h1>
            </header>
            <div className={styles.resenas}>
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

            </div>

        </div>
    )
}

export default Card
