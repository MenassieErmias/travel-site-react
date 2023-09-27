import Logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="text-gray-300 w-full p-4 flex items-center justify-center bg-black h-[70px]">
            <div className="max-w-[1000px] flex justify-between items-center w-full">
                <a href='/'>
                    <img className='h-full w-[70px]' src={Logo} alt="logo" />
                </a>
                <ul className="flex justify-around w-[500px]">
                    <li>Home</li>
                    <li>About</li>
                    <li>Explore</li>
                    <li>Search</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar