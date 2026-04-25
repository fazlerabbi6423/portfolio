
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center px-10 py-4 bg-white text-black shadow-md'>
            
            
            <div>
               <Link href='/'>
                            <h1 className='text-2xl font-bold text-gray-900 tracking-tight hover:text-blue-600 transition-colors duration-200'>
                                Fazle Rabbi
                            </h1>
                        </Link>
            </div>

        
            <div className='flex gap-6 text-lg font-medium'>
                <Link className='hover:text-blue-500 transition-colors' href='/'>Home</Link>
                <Link className='hover:text-blue-500 transition-colors' href='/project'>Project</Link>
                <Link className='hover:text-blue-500 transition-colors' href='/about'>About</Link>
                <Link className='hover:text-blue-500 transition-colors' href='/contact'>Contact</Link>
            </div>

        </nav>
    );
};

export default Navbar;