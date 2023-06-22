import React from 'react'

function Pregunta({ Pregunta }) {
  return (
    <div className='w-full h-full flex justify-center '>
      <div className='border-4 border-[#094A92] w-[80%] flex justify-center rounded-r-full rounded-l-full'>
      <div className='w-[100%] h-[100px] rounded-r-full rounded-l-full bg-[#0C0A0D] flex justify-center items-center' >
          <h2 className='text-white font-bold text text-4xl'>{Pregunta}</h2>
        </div>
      </div>
    </div>
  )
}

export default Pregunta