import React from 'react';
import img1 from '../assets/beach-1236581_1920.jpg';

const Hero = () => {
    return (
        <div name="home" className='bg-black text-gray-300 p-4 w-full min-h-screen h-screen'>
            <div className='max-w-[1000px] flex flex-col items-center justify-center w-full h-full mx-auto'>
                <div className='grid md:grid-cols-3'>
                    <img src={img1} alt="" className='w-full col-span-2' />
                    <div className='grid md:grid-rows-2'>
                        <p className='text-4xl text-bold h-full flex items-end justify-center'>
                            Adventure Awaits!
                        </p>
                        <p className='text-2xl px-4 flex items-start justify-center text-center'>
                            Explore your wildest destination yet here on Octravel!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero