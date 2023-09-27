import React from 'react';
import img1 from '../assets/beach-1236581_1920.jpg';


const Hero = () => {

    return (
        <div name="home" className='bg-[#1d2022] text-gray-300 p-4 w-full min-h-screen flex flex-col items-center justify-center'>
            <div className='max-w-[1000px] flex flex-col items-center justify-center w-full h-full mx-auto'>
                <div className='md:grid md:grid-cols-3 gap-3'>
                    <img src={img1} alt="beach" className='w-full col-span-2' />
                    <div className='md:grid md:grid-rows-2 flex flex-col items-center justify-center'>
                        <p className='my-2 md:my-0 text-4xl text-bold h-full text-center border-b-2 border-pink-600 flex items-end justify-center'>
                            Adventure Awaits!
                        </p>
                        <p className='my-2 md:my-0 text-2xl h-full px-4 flex items-start justify-center text-center'>
                            Explore your wildest destination yet, here on Octravel!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero