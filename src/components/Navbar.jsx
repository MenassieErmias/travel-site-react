import Logo from '../assets/logo.png';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Explore</li>
                    <li>Search</li>
                    <li>Contact</li>
                </ul>
                <div className='md:hidden'>
                    {
                        nav ? <AiOutlineClose size={30} onClick={handleClick} /> :
                            <AiOutlineMenu size={30} onClick={handleClick} />
                    }
                </div>
            </div>

            <ul className={nav ? 'bg-[#1d2022] w-full h-screen flex flex-col justify-around items-center p-8' : "hidden"}>
                <li className='text-2xl'>Home</li>
                <li className='text-2xl'>About</li>
                <li className='text-2xl'>Explore</li>
                <li className='text-2xl'>Search</li>
                <li className='text-2xl'>Contact</li>
            </ul>


        </div>
    )
}

export default Navbar