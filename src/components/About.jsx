import React from 'react'
const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-800'>About</p>
        </div>
        <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, repellendus aliquid quidem, quia debitis tenetur neque aliquam sit minima perferendis corrupti illo accusamus beatae cumque laudantium corporis, iusto aperiam molestiae.</p>
        <br />
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
    </div>
  )
}

export default About