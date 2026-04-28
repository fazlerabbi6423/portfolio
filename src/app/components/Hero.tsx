
// bg-gradient-to-br


import Link from 'next/link';


const Hero = () => {
    return (
        <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
            
            
            <div className='absolute inset-0  bg-gradient-to-br from-white via-green-50 to-teal-100'></div>
            
       
            <div className='absolute inset-0' style={{
                backgroundImage: `radial-gradient(circle, #00000015 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }}></div>

          
            <div className='absolute bottom-10 right-20 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-40'></div>

            
            <div className='relative z-10 flex items-center justify-between max-w-6xl mx-auto px-10 gap-10'>
                
             
                <div className='flex-1 text-left'>
                    
                    <p className='text-gray-500 text-xl mb-2 font-light'>Hi, I'm</p>
                    
                    <h1 className='text-6xl font-bold text-gray-800 mb-4'>
                        Fazle Rabbi
                    </h1>
                    
                    <p className='text-gray-500 text-lg max-w-md mb-10'>
                        I'm a fort end  Developer. 
                    </p>

                    <div className='flex gap-4'>
                        
                        <Link 
                            href='/resume'
                            className='flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors'
                        >
                            View My Resume 
                        </Link>

                        <Link 
                            href='https://github.com'
                            target='_blank'
                            className='flex items-center gap-2 border border-gray-800 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors'
                        >
                            GitHub Profile 
                        </Link>

                    </div>
                </div>

            
                <div className='flex-shrink-0'>
                    <div className='w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl'>
                
                        <img  className='w-full h-full object-cover' src="profile.jpg" alt="" />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Hero;