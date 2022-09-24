export const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>|hello@cargo.io</div>
            <div>Product . Our Work . Services</div>
            <div className='flex items-center'>
                <div className='mr-4'>FAQ</div>
                <button className='rounded-full bg-black text-white text-sm px-6 py-2 transition ease-in-out delay-100 hover:scale-105  duration-200'>
                    Get Started
                </button>
            </div>
        </div>
    );
};
