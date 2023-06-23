import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Pregunta from '../components/Pregunta'
import Respuestas from '../components/Respuestas'
import preguntas from '../preguntas.json'
import { useAppValue } from '../context/appContext'
import { actionTypes } from '../context/AppReducer'

function Anfitrion() {

  const [ {index}, dispatch ] = useAppValue();
  
  const navigate = useNavigate(); 

  useEffect(() => {
    if(!localStorage.getItem('twitch_token')){
        navigate("/");
      }
  })

  const next_question = () => {
    if(index < preguntas.length - 1) {
      dispatch({type: actionTypes.UPDATE_INDEX})
      console.log(index)
    } 
  }

  const handleNext = () => {
    next_question()
  }

  


  return (
    <div>
      <Pregunta Pregunta={preguntas[index].pregunta} / >
      <Respuestas respuestas={preguntas[index]} />
      <div className='mt-[100px] w-[300px] h-[70px] bg-gray-600 mx-auto flex items-center justify-center rounded-2xl cursor-pointer hover:bg-gray-400' onClick={handleNext}>
         <h4 className='text-white font-bold text-2xl cursor-pointer  hover:text-black'>Siguiente Pregunta</h4>
      </div>
    </div>
  )
}

export default Anfitrion