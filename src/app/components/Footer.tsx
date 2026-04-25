import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-10 px-10'>
            
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>

                <div>
                    <h2 className='text-2xl font-bold mb-3'>Fazle Rabbi</h2>
                    <p className='text-gray-400 text-sm'>
                        A passionate Developer building modern web experiences.
                    </p>
                </div>

             
                <div>
                    <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
                    <ul className='space-y-2 text-gray-400'>
                        <li><Link href='/' className='hover:text-white transition-colors'>Home</Link></li>
                        <li><Link href='/project' className='hover:text-white transition-colors'>Project</Link></li>
                        <li><Link href='/about' className='hover:text-white transition-colors'>About</Link></li>
                        <li><Link href='/contact' className='hover:text-white transition-colors'>Contact</Link></li>
                    </ul>
                </div>

               
                <div>
                    <h3 className='text-lg font-semibold mb-3'>Connect</h3>
                    <ul className='space-y-2 text-gray-400'>
                        <li>
                            <a href='https://github.com' target='_blank' className='hover:text-white transition-colors'>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href='https://linkedin.com' target='_blank' className='hover:text-white transition-colors'>
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href='https://facebook.com' target='_blank' className='hover:text-white transition-colors'>
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* ✅ Bottom Line */}
            <div className='border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm'>
                <p>© {new Date().getFullYear()} Fazle Rabbi. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;