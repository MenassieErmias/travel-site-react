import img1 from '../assets/valley-4646114_1920.jpg';
import img2 from '../assets/people-2591874_1920.jpg';
import img3 from '../assets/beach-1236581_1920.jpg';
const Explore = () => {
    return (
        <div className="bg-[#1d2022] w-full h-max p-4 text-gray-300">
            <div className="w-full h-full max-w-[1000px] mx-auto">
                <div className="text-center">
                    <span className="text-4xl border-b-2 border-pink-600">Explore</span>
                </div>
                <div className="my-2">
                    <p className="text-2xl">Featured this week</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                    <div className="p-2 shadow-grey-400 shadow-md">
                        <img className='h-[400px] object-cover w-full' src={img1} alt="valley" />
                        <p className='text-bold text-lg text-center border-b border-gray-100 py-2'>The Valleys of Ethiopia</p>
                        <p className='text-bold text-lg text-center border-b border-gray-100 py-2'>Amhara, Ethiopia</p>
                        <p className='text-bold text-lg text-center border-b border-gray-100 py-2'>Est. cost per week - 45$</p>
                    </div>
                    <div className="p-2 shadow-grey-400 shadow-md">
                        <img className='h-[400px] object-cover w-full' src={img2} alt="valley" />
                        <p className='text-bold text-lg text-center border-b border-gray-100 py-2'>The Grand Canyon</p>
                        <p className='text-bold text-lg text-center border-b border-gray-100 py-2'>Colorado, USA</p>
                        <p className='text-bold text-lg text-center border-b border-gray-100 py-2'>Est. cost per week - 300$</p>
                    </div>
                    <div className="p-2 shadow-grey-400 shadow-md">
                        <img className='h-[400px] object-cover w-full' src={img3} alt="valley" />
                        <p className='text-bold text-lg text-center border-b border-gray-100 py-2'>The Beaches of the Carribean</p>
                        <p className='text-bold text-lg text-center border-b border-gray-100 py-2'>Kingston, Jamaica</p>
                        <p className='text-bold text-lg text-center border-b border-gray-100 py-2'>Est. cost per week - 150$</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Explore