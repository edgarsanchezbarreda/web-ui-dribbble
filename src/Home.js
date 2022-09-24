import { Navbar } from './Navbar';
import { Hero } from './Hero';

export const Home = () => {
    return (
        <div className='h-screen bg-gradient-to-tr from-yellow-100 to-purple-200 px-16 py-10'>
            <Navbar />
            <Hero />
        </div>
    );
};
