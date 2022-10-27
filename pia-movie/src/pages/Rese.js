import { Button } from '@mui/material';
import React, { useState } from 'react'
import '../components/Card.css'

export const Card = () => {

    const [name, setName] = useState('Nombre');
    const [user, setUser ] = useState('usuario');
    const [email, setEmail ] = useState('correo');

  return (

      <div className='App'>

          <div className='Card'>
              <div className='upper-container'>
                  <div className='image-container'>
                      <img src="https://media.istockphoto.com/vectors/popcorn-in-a-paper-cup-vector-id1216436314?k=6&m=1216436314&s=612x612&w=0&h=kkGrjTg12lG9vDgP1KnxP5lirUJgPaWJuH67yc07_Cs=" alt="" height="100px" width="100px" />

                  </div>

              </div>
              <div className='lower-container'>
                  <h3> {name}</h3>
                  <h4> {user}</h4>
                  <h4> {email}</h4>
              </div>
          </div>
      </div>    
  )
}

export default Card
