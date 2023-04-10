import React from 'react'
import Abhishek from "../assets/Abhishek.png";
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import {CgMail} from 'react-icons/cg'
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';
import "./home.css"
const Home = () => {
  return (
    <div name="Home" className='home h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='flex flex-col justify-center items-center max-w-screen-lg h-full mx-auto md:flex-row'>
            <div className='portfolio bg-gradient-to-b from-cyan-950 to-blue-500'>
                <img src={Abhishek} alt="My-portfolio" className='portfolio_img'/>
                <h1 className='portfolio_heading'>Abhishek Santra</h1>
                <p>Web Developer</p> 
                <div className='flex flex-row justify-center items-center text-white'>
                    <a href="https://www.linkedin.com/in/abhishek-santra-0979a9207/"target='_blank' rel="noreferrer"><FaLinkedin className='portfolio_link'/></a>
                    <a href="https://github.com/AbhishekSantra"target='_blank' rel="noreferrer"><FaGithub className='portfolio_link'/></a>
                    <a href="mailto:santrabhishek@gmail.com"target='_blank' rel="noreferrer"><CgMail className='portfolio_link'/></a>
                </div>
                <a href='https://drive.google.com/file/d/1GahAIF6Pzbx_4FIIylvkploioQ_8zaHr/view?usp=share_link' target='_blank' rel="noreferrer">
                <button className='portfolio_btn group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                    CV
                    <span className='group-hover:rotate-90'><MdOutlineKeyboardArrowRight/></span>
                </button> 
                </a>          
            </div>
            <div className='details flex flex-col justify-center h-full'>
                <h2 className=' text-4xl sm:text-7xl font-bold text-white'>I,m a Frontend Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>I am a web developer focused on crafting clean and user friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                <div className='details_btn'>
                    <Link to='Projects' className='group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:cursor-pointer'>
                        Projects
                        <span className='group-hover:rotate-90'><MdOutlineKeyboardArrowRight/></span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home