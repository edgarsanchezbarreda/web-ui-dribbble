export const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center h-96 mt-24'>
            <div className='px-24'>
                <h1 className='text-7xl font-bold my-8'>Cargo Design Agency</h1>
            </div>
            <div className='flex flex-col items-center px-80 mt-4'>
                <p className='text-xl'>
                    Ahead with 100+ Amazing clients with 20+ Country
                </p>
                <p className='text-xl'>Served the best design materials</p>
            </div>
            <div className='my-10'>
                <button className='rounded-full bg-yellow-400 text-black px-8 py-3 transition ease-in-out delay-100 hover:scale-105 hover:bg-amber-400 duration-200'>
                    Get Started
                </button>
            </div>
        </div>
    );
};
