

const About = () => {
    return (
        <div name='about' className="w-full h-max bg-gray-300 p-4">
            <div className="max-w-[1000px] h-full p-4 mx-auto">
                <div className="flex flex-col items-center md:grid md:grid-cols-3 md:gap-4">
                    <div className="md:text-right">
                        <p className="flex md:inline w-max text-4xl border-b-2 border-pink-600">About</p>
                    </div>
                    <p className="my-4 md:p-4 md:col-span-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iusto recusandae dolore tempora at autem, expedita harum molestiae iure consequuntur minima. Vero, ut quis autem corrupti perspiciatis nostrum ex temporibus.</p>
                </div>
            </div>
        </div>
    )
}

export default About