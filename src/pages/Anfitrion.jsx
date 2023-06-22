import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Pregunta from '../components/Pregunta'
import Respuestas from '../components/Respuestas'

function Anfitrion() {

  const navigate = useNavigate(); 

  useEffect(() => {
    if(!localStorage.getItem('twitch_token')){
        navigate("/");
      }
  })

  const respuestas  = {
    'A': 'Tigre',
    'B': 'Leon',
    'C': 'Elefante',
    'D': 'Hipopotamo'
  }
 

  return (
    <div>
      <Pregunta Pregunta={"¿Cual es tu animal favorito?"} / >
      <Respuestas respuestas={respuestas}/>
    </div>
  )
}

export default Anfitrion