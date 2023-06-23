import React, { useState } from 'react'
import { useAppValue } from '../context/appContext'
import { actionTypes } from '../context/AppReducer'
import preguntas from '../preguntas.json'
import Confirmation from './Confirmation'
function Respuestas({ respuestas }) {

    const [{ index, selected }, dispatch] = useAppValue();
  



  
    const options = [{opcion: "A", respuesta: respuestas.A}, {opcion: "B", respuesta: respuestas.B}, {opcion: "C", respuesta:respuestas.C}, {opcion: "D", respuesta:respuestas.D}]


    const next_question = () => {
        if (index < preguntas.length - 1) {
            dispatch({ type: actionTypes.UPDATE_INDEX })
            // setSelected(false);
            console.log(index)
        }
    }
    const handeValidate = (option, letra) => {


        dispatch({ type: actionTypes.MODAL_HANDLER, modal: true, selected: letra})

        console.log(selected)
        // console.log(respuestas.respuesta === option)

        // if (respuestas.respuesta === option) {
        //     next_question()  
        // }
    }




    return (
        <>
            <Confirmation />
            <div className='w-full px-52 mt-16 flex justify-between flex-wrap' >
                {options.map((option) => (
                    <div className='2xl:w-[600px] xl:w-[350px] border-4 border-[#094A92] rounded-r-full rounded-l-full  cursor-pointer mb-[50px]' onClick={() => handeValidate(option.respuesta, option.opcion)}>
                        <div className={`w-full h-[80px]  rounded-r-full rounded-l-full flex items-center px-5 cursor-pointer ${selected === option.opcion ? 'bg-[#946592]' : 'bg-black'}`}>
                            <span className={`${selected === option.opcion ? "text-black" : "text-[#886710]"} text-2xl font-bold cursor-pointer`}> ▪️ {option.opcion}:</span>
                            <span className='ml-3 text-2xl font-bold text-white cursor-pointer'>{option.respuesta}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Respuestas