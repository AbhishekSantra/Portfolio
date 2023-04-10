import React from 'react'
import c from "../assets/C.png";
import python from "../assets/Python.jpg";
import java from "../assets/java.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import sql from "../assets/SQL.png";
import git from "../assets/github.png";
const Experience = () => {
    const work = [
        {
            id: 1,
            src: c,
            title: "C",
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            src: python,
            title: "Python",
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            src: java,
            title: "Java",
            style: 'shadow-red-500'
        },
        {
            id: 4,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 5,
            src: css,
            title: "CSS",
            style: 'shadow-blue-700'
        },
        {
            id: 6,
            src: js,
            title: "JavaScript",
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: react,
            title: "React",
            style: 'shadow-blue-600'
        },
        {
            id: 8,
            src: sql,
            title: "SQL",
            style: 'shadow-orange-500'
        },
        {
            id: 9,
            src: git,
            title: "GitHub",
            style: 'shadow-gray-700'
        },
    ]
    return (
        <div name="Experience" className='w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className=' pb-8'>
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-8 sm:px-0'>
                    {
                        work.map(({ id, src, title, style }) => (
                            <div key={id} className={`ml-1 shadow-md hover:scale-105 duration-500 shadow-gray-600 rounded-lg ${style}`}>
                                <img src={src} alt="" srcset="" className=' w-20 mx-auto h-20 ' />
                                <p align="center" className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience