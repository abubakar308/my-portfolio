import heroImage from "../assets/heroimage.png"
const Hero = () => {
    return (
        <section className="md:flex justify-between p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 items-center rounded-2xl">

            {/* text section */}
          <div>
              <div className="text-left md:px-6 space-y-4 max-w-xl">
        <h2 className="text-2xl sm:text-2xl text-gray-500">Hi there 👋</h2>
        <h1 className="text-3xl sm:text-4xl font-bold">I'm <span className="text-indigo-500">Md Abu Bakar Siddique</span></h1>
        <h2 className="text-2xl sm:text-3xl text-gray-300">A Fullstack developer (MERN) </h2>
            </div>
             {/* CTA Buttons */}
        <div className="mt-6 flex justify-center sm:justify-start gap-4">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
             <a href="https://drive.google.com/file/d/1909-oKKJPFXLi7hQQftmyn06D6pWJmc3/view?usp=sharing" target="_blank"> View Resume</a>
            </button>
        </div>
          </div>

            {/* hero image section */}
      <div className="mt-10 sm:mt-0">
        <div className="relative w-60 h-80 bg-indigo-600/30 rounded-xl mx-auto transform -rotate-6 hover:rotate-0 transition duration-500">
          <img
            src={heroImage}
            alt="Hero"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
        </section>
    );
};

export default Hero;