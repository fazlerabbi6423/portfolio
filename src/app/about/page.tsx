

"use client";

const educationData = [
  {
    degree: "BSC — Department of Economics",
    institution: "Savar Government College",
    year: "Present",
  },
  {
    degree: "Higher Secondary School Certificate (HSC)",
    institution: "Government Rupnagar Model School And College",
    year: "2021",
  },
];

const Page = () => {
  return (
    <div className="bg-black min-h-screen">

      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-8 md:px-20">
        <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center gap-12 text-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Hi, I&apos;m <br />
              <span className="text-white">Fazle Rabbi</span>
            </h1>
            <p className="text-sm md:text-base leading-relaxed max-w-md text-white/70 mx-auto">
              I am a front end developer. I love building full-stack solutions
              using Next.js, NestJS, and TypeScript.
            </p>
          </div>
        </div>
      </section>

    
      <section className="bg-black py-16 px-8 md:px-20">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Education &amp; Qualifications
            </h2>
            <p className="text-white/50 text-sm md:text-base">
              A brief overview of my education, certifications, and continuous
              learning in technology.
            </p>
          </div>

        
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

           
            <div className="flex items-center justify-center gap-2 mb-5">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.5c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5c0-.538.209-1.05.584-1.507L12 14z"
                />
              </svg>
              <h3 className="font-bold text-white text-sm">
                Academic Background
              </h3>
            </div>

            
            <ul className="space-y-4">
              {educationData.map((item, i) => (
                <li key={i} className="flex flex-col items-center text-center">
                  <span className="text-sm">
                    <span className="font-bold text-white">
                      {item.degree}
                    </span>{" "}
                    <span className="text-white/50 italic">
                      — {item.institution}
                    </span>
                  </span>
                  <span className="text-xs text-white/40 mt-0.5">
                    {item.year}
                  </span>
                </li>
              ))}

              <li className="flex flex-col items-center text-center text-sm text-white/70">
                <span>
                  <span className="font-bold text-white">Major Focus Areas:</span>{" "}
                  Web Development, Database Management, and Computer Networks.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Page;
