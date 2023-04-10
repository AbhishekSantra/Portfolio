import React from 'react'
import disney from "../assets/portfolio/disney.jpg"
import weather from "../assets/portfolio/Weather.png"
import MultiMart from "../assets/portfolio/MultiMart.png"
import quiz from "../assets/portfolio/quiz.jpg"
import TextUtils from "../assets/portfolio/TextUtils.png"
import Shopping from "../assets/portfolio/Shopping.png"
const Projects = () => {
    const projects = [
        {
            id: 1,
            src: disney,
            demo:" https://9qiqvh.csb.app/",
            code:"https://lnkd.in/dHxRxhEe"
        },
        {
            id: 2,
            src: weather,
            demo:"https://918lj3.csb.app/",
            code:"https://lnkd.in/dvsx8R4v",
        },
        {
            id: 3,
            src:MultiMart,
            demo:"https://github.com/AbhishekSantra/MultiMart-Ecommerce-Website",
            code:"https://github.com/AbhishekSantra/MultiMart-Ecommerce-Website"
        },
        {
            id: 4,
            src: quiz,
            demo:"https://6lspl1.csb.app/",
            code:"https://github.com/AbhishekSantra/Quiz-App"
        },
        {
            id: 5,
            src: TextUtils,
            demo:"https://pzc32j.csb.app/",
            code:"https://github.com/AbhishekSantra/TextUtils"
        },
        {
            id: 6,
            src: Shopping,
            demo:"https://abhisheksantra.github.io/Shopping-List/",
            code:"https://github.com/AbhishekSantra/Shopping-List"
        },
    ]
    return (
        <div name="Projects" className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className=" py-6">Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0'>
                    {
                        projects.map(({ id, src,demo,code }) => (
                            <div key={id} className=' ml-1 shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" srcset="" className='project_img rounded-md duration-200 hover:scale-105 w-80 h-32 '/>
                                <div className='flex items-center justify-center w-full'>
                                    <a href={demo} target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button></a>
                                    <a href={code} target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects