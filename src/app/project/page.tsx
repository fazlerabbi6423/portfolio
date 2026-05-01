

const projects = [
  {
    id: 1,
    name: 'E-commerce Website',
    image: '/project1.png',
    tech: 'React, Node',
    live: 'http://127.0.0.1:5500/B-10-Assignments-3/index.html',
    git: 'https://github.com/fazlerabbi6423/B-10-Assignments-3'
  },
    {
    id: 1,
    name: 'E-commerce Website',
    image: '/project1.png',
    tech: 'React, Node',
    live: 'http://localhost:5173/',
    git: 'https://github.com/fazlerabbi6423/assignment-eight'
  }
]

export default function Page() {
  return (
    <div className='p-6 bg-amber-50 text-black min-h-screen'>
      
      <div className='grid md:grid-cols-3 gap-6'>
        
        {projects.map((project) => (
          <div 
            key={project.id} 
            className='bg-white rounded-xl shadow p-4 hover:scale-105 transition'
          >

            <h2 className='text-xl font-bold'>
              {project.name}
            </h2>

             <p className='text-gray-600 text-sm my-2'>
              {project.tech}
            </p>

           
            <div className='flex gap-3 mt-3'>
              
              <a 
                href={project.live}
                target='_blank'
                className='bg-blue-500 text-white px-3 py-1 rounded'
              >
                Live
              </a>

              <a 
                href={project.git}
                target='_blank'
                className='bg-black text-white px-3 py-1 rounded'
              >
                Code
              </a>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}