import React from 'react'
import Pregunta from '../components/Pregunta'
import Respuestas from '../components/Respuestas'
function Participante() {
    return (
        <div>
            <Pregunta Pregunta={"¿Cual es tu animal favorito?"} />
            <Respuestas respuestas={respuestas} />
        </div>
    )
}

export default Participante