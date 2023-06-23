import React from 'react'
import { useAppValue } from '../context/appContext'
import { actionTypes } from '../context/AppReducer'
import preguntas from '../preguntas.json'
function Respuestas({ respuestas }) {

    const [{ index }, dispatch] = useAppValue();
    const next_question = () => {
        if (index < preguntas.length - 1) {
            dispatch({ type: actionTypes.UPDATE_INDEX })
            console.log(index)
        }
    }
    const handeValidate = (option) => {
        console.log(respuestas.respuesta === option)
        
        if (respuestas.respuesta === option) {
            next_question()
        }
    }


    return (
        <div className='w-full px-52 mt-16 flex justify-between flex-wrap' >
            <div className='2xl:w-[600px] xl:w-[350px] border-4 border-[#094A92] rounded-r-full rounded-l-full  cursor-pointer' onClick={() => handeValidate(respuestas.A)}>
                <div className='w-full h-[80px] bg-black rounded-r-full rounded-l-full flex items-center px-5 cursor-pointer'>
                    <span className='text-[#886710] text-2xl font-bold cursor-pointer'> ▪️ A:</span>
                    <span className='ml-3 text-2xl font-bold text-white cursor-pointer'>{respuestas.A}</span>
                </div>
            </div>
            <div className='2xl:w-[600px] xl:w-[350px] border-4 border-[#094A92] rounded-r-full rounded-l-full cursor-pointer ' onClick={() => handeValidate(respuestas.B)} >
                <div className='w-full h-[80px] bg-black rounded-r-full rounded-l-full flex items-center px-5'>
                    <span className='text-[#886710] text-2xl font-bold'> ▪️ B:</span>
                    <span className='ml-3 text-2xl font-bold text-white'>{respuestas.B}</span>
                </div>
            </div>
            <div className='2xl:w-[600px] xl:w-[350px] border-4 border-[#094A92] rounded-r-full rounded-l-full mt-28 cursor-pointer' onClick={() => handeValidate(respuestas.C)}>
                <div className='w-full h-[80px] bg-black rounded-r-full rounded-l-full flex items-center px-5'>
                    <span className='text-[#886710] text-2xl font-bold'> ▪️ C:</span>
                    <span className='ml-3 text-2xl font-bold text-white'>{respuestas.C}</span>
                </div>
            </div>
            <div className='2xl:w-[600px] xl:w-[350px] border-4 border-[#094A92] rounded-r-full rounded-l-full mt-28 cursor-pointer' onClick={() => handeValidate(respuestas.D)}>
                <div className='w-full h-[80px] bg-black rounded-r-full rounded-l-full flex items-center px-5'>
                    <span className='text-[#886710] text-2xl font-bold'> ▪️ D:</span>
                    <span className='ml-3 text-2xl font-bold text-white'>{respuestas.D}</span>
                </div>
            </div>



        </div>
    )
}

export default Respuestas