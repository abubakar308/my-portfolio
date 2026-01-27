import heroImage from "../assets/abubakar.png";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

      {/* Text Section */}
      <div className="text-center md:text-left space-y-4">
        <p className="text-gray-500 text-lg">Hi there 👋</p>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          I'm{" "}
          <span className="text-indigo-500">
            Md Abu Bakar Siddique
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-700 font-medium">
          Full Stack Developer (MERN & TypeScript)
        </h2>

        <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
          I build scalable, secure, and user-friendly web applications using
          modern technologies with real-world problem-solving experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <a
            href="https://drive.google.com/file/d/1909-oKKJPFXLi7hQQftmyn06D6pWJmc3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-600 transition shadow-md"
          >
            View Resume
          </a>

          <a
            href="#contact"
            className="border border-indigo-500 text-indigo-500 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative">
        <div className="w-64 h-80 rounded-2xl bg-indigo-500/20 flex items-center justify-center rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
          <img
            src={heroImage}
            alt="Md Abu Bakar Siddique - Full Stack Developer"
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
