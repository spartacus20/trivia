import React, { useEffect } from 'react'
import { BsTwitch } from 'react-icons/bs'
import { twitchAuthURL } from "../config.js"
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

function Home() {

  const navigate = useNavigate()
  const TWITCH_CLIENT_ID = "gtv0iq3rto3om5whb06oos1a9ymc1r"
  const REDIRECT_URL = "http://localhost:3000/";  
 
  useEffect(() =>{
    const params = new URLSearchParams(window.location.search) 
    const code = params.get('code');
    
    if(code){ 
        localStorage.setItem('twitch_token', code); 
        navigate("/anfitrion");
    }

  }, [])    


  return (
    <div className='w-full h-[100vh] bg-red-100 flex flex-col '>
      <h1 className='text-4xl text-center mt-[150px] font-bold '>Trivia Twitch</h1>
    
        <a  href={twitchAuthURL(TWITCH_CLIENT_ID, REDIRECT_URL)} className=' w-[250px] h-[60px] mx-auto mt-[100px] bg-[#9146FF] flex items-center rounded-xl px-5 justify-center text-xl hover:bg-[#9657f4]'> <BsTwitch className='mr-3'/> Connect with twitch </a>
        <Footer/>
    </div>
  )
}

export default Home