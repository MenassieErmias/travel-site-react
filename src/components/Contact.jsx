

const Contact = () => {
    return (
        <div className='bg-[#1d2022] w-full h-max p-4 text-gray-300'>
            <div className='max-w-[1000px] mx-auto'>
                <div className="text-center">
                    <span className="text-4xl border-b-2 border-pink-600">Contact</span>
                </div>
                <p className="py-6 font-lg md:text-xl">
                    You can contact us with the form below, or you can shoot us an email at <a className="text-gray-100" href="email:123business@email.com">123business@email.com</a>.
                </p>
                <form className="flex flex-col" action="">
                    <input className="p-2 font-lg text-black my-2 bg-gray-300" type="text" placeholder="Name" />
                    <input className="p-2 font-lg text-black my-2 bg-gray-300" type="email" placeholder="E-mail" />
                    <textarea className="p-2 font-lg text-black my-2 bg-gray-300" name="message" id="message" cols="30" rows="10"></textarea>
                    <button className="mx-auto bg-gray-300 text-black px-3 py-1" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact