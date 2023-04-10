import React from 'react'
const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-800'>About</p>
        </div>
        <p className='text-xl mt-20'>My name is Abhishek Santra, I born and raised in Odisha, and currently I am pursuing B. Tech in computer Science and Engineering, from C V Raman Global University, Bhubaneswar with an aggregate of 9.2 CGPA till the current semester.</p>
        <br />
        <p className='text-xl'>I am a web developer focused on crafting clean and user friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
    </div>
    </div>
  )
}

export default About