

const page = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

    

           <div className=" max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
       
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            Hi, I'm <br />
            <span className="font-serif italic">Fazle Rabbi</span>
          </h1>
          <p className="text-sm md:text-base  font-mono leading-relaxed max-w-md">
           I am a front end developer. I love building
            full-stack solutions using Next.js, NestJS, and TypeScript.
          </p>
        </div>

      </div>

      <div>
        <div>
          <h1>Education & Qualifications</h1>
          <p>A brief overview of my education, certifications, and continuous learning in technology.</p>
        </div>




        <div>
          <h1>Academic Background</h1>
        </div>
      </div>








    </section>
 
  );
}



 
export default page;