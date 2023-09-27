
const Search = () => {
    return (
        <div name='search' className="bg-gray-300 w-full h-max p-4">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center">
                    <span className="border-b-2 border-pink-600 text-4xl">Search</span>
                </div>
                <div className="my-8">
                    <form action="" className="w-full md:max-w-[500px] md:mx-auto">
                        <label className="absolute left-[-10000px]" htmlFor="search">Search bar</label>
                        <input className="bg-gray-300 py-3 px-2 font-lg border border-black font-gray-300 outline-none rounded-md w-full" id='search' type="text" placeholder="Search for a destination. Eg Paris, France" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search