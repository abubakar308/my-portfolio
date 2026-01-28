import heroImage from "../assets/abubakar.png";

const Hero = () => {
  return (
    <section className="w-full container mx-auto px-6 py-8 md:py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Text Section */}
      <div className="text-center md:text-left space-y-6">
        <div>
          <p className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">Available for projects</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
            I'm <span className="text-indigo-600">Md Abu Bakar Siddique</span>
          </h1>
        </div>

        <h2 className="text-xl md:text-2xl text-gray-700 font-semibold italic">
          Full Stack Developer | MERN & TypeScript Expert
        </h2>

        <p className="text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg">
          Specializing in building scalable web applications with <span className="font-bold text-gray-800">PostgreSQL, Prisma, and Next.js</span>. Focused on creating secure, role-based systems with high performance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          {/* Hire Me - Primary Action */}
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-200 transform hover:-translate-y-1"
          >
            Hire Me
          </a>

          {/* View Resume - Secondary Action */}
          <a
            href="https://drive.google.com/file/d/1909-oKKJPFXLi7hQQftmyn06D6pWJmc3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-indigo-100 text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition flex items-center gap-2"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative group">
        <div className="absolute inset-0 bg-indigo-500 rounded-2xl opacity-20"></div>
        <div className="w-64 h-80 rounded-2xl p-2 shadow-2xl relative z-10">
          <img
            src={heroImage}
            alt="Md Abu Bakar Siddique"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
