import Logo from '../assets/logo.png';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(prev => !prev);
    }

    return (
        <div className="fixed top-0 left-0 text-gray-300 w-full p-4 bg-[#1d2022]">
            <div className="max-w-[1000px] flex justify-between items-center w-full h-[42px] mx-auto">
                <a href='/'>
                    <img className='h-full w-[50px]' src={Logo} alt="logo" />
                </a>
                <ul className="hidden md:flex justify-around w-[500px]">
                    <li>
                        <Link className='cursor-pointer' to="home" smooth={true} offset={-75} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='cursor-pointer' to="about" smooth={true} offset={-175} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className='cursor-pointer' to="explore" smooth={true} offset={-75} duration={500}>
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link className='cursor-pointer' to="search" smooth={true} offset={-175} duration={500}>
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link className='cursor-pointer' to="contact" smooth={true} offset={-75} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className='md:hidden'>
                    {
                        nav ? <AiOutlineClose size={30} onClick={handleClick} /> :
                            <AiOutlineMenu size={30} onClick={handleClick} />
                    }
                </div>
            </div>

            <ul className={nav ? 'bg-[#1d2022] w-full h-screen flex flex-col justify-around items-center p-8' : "hidden"}>
                <li className='text-2xl'>
                    <Link to="home" onClick={handleClick} className='cursor-pointer' smooth={true} offset={-75} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='text-2xl'>
                    <Link to="about" onClick={handleClick} className='cursor-pointer' smooth={true} offset={-175} duration={500}>
                        About
                    </Link>
                </li>
                <li className='text-2xl'>
                    <Link to="explore" onClick={handleClick} className='cursor-pointer' smooth={true} offset={-75} duration={500}>
                        Explore
                    </Link>
                </li>
                <li className='text-2xl'>
                    <Link to="search" onClick={handleClick} className='cursor-pointer' smooth={true} offset={-175} duration={500}>
                        Search
                    </Link>
                </li>
                <li className='text-2xl'>
                    <Link to="contact" onClick={handleClick} className='cursor-pointer' smooth={true} offset={-75} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>


        </div>
    )
}

export default Navbar