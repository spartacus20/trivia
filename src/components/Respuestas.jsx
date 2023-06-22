import React from 'react'

function Respuestas({ respuestas }) {
    return (
        <div className='w-full px-52 mt-16 flex justify-between flex-wrap' >
            <div className='2xl:w-[600px] xl:w-[350px] border-4 border-[#094A92] rounded-r-full rounded-l-full ' >
                <div className='w-full h-[80px] bg-black rounded-r-full rounded-l-full flex items-center px-5'>
                    <span className='text-[#886710] text-2xl font-bold'> ▪️ A:</span>
                    <span className='ml-3 text-2xl font-bold text-white'>{respuestas.A}</span>
                </div>
            </div>
            <div className='2xl:w-[600px] xl:w-[350px] border-4 border-[#094A92] rounded-r-full rounded-l-full ' >
                <div className='w-full h-[80px] bg-black rounded-r-full rounded-l-full flex items-center px-5'>
                    <span className='text-[#886710] text-2xl font-bold'> ▪️ B:</span>
                    <span className='ml-3 text-2xl font-bold text-white'>{respuestas.B}</span>
                </div>
            </div>
            <div className='2xl:w-[600px] xl:w-[350px] border-4 border-[#094A92] rounded-r-full rounded-l-full mt-28' >
                <div className='w-full h-[80px] bg-black rounded-r-full rounded-l-full flex items-center px-5'>
                    <span className='text-[#886710] text-2xl font-bold'> ▪️ C:</span>
                    <span className='ml-3 text-2xl font-bold text-white'>{respuestas.C}</span>
                </div>
            </div>
            <div className='2xl:w-[600px] xl:w-[350px] border-4 border-[#094A92] rounded-r-full rounded-l-full mt-28' >
                <div className='w-full h-[80px] bg-black rounded-r-full rounded-l-full flex items-center px-5'>
                    <span className='text-[#886710] text-2xl font-bold'> ▪️ D:</span>
                    <span className='ml-3 text-2xl font-bold text-white'>{respuestas.D}</span>
                </div>
            </div>



        </div>
    )
}

export default Respuestas