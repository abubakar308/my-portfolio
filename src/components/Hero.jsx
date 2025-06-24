import heroImage from "../assets/heroimage.png"
const Hero = () => {
    return (
        <section className="md:flex justify-between p-4 mt-6 mb-16 items-center">

            {/* text section */}
          <div>
              <div className="text-left md:px-4 space-y-3 max-w-xl">
        <h2 className="text-2xl sm:text-2xl text-gray-400">Hi there 👋</h2>
        <h1 className="text-3xl sm:text-4xl font-bold">I'm <span className="text-indigo-500">Md Abu Bakar Siddique</span></h1>
        <h2 className="text-2xl sm:text-3xl text-gray-700">A Fullstack developer (MERN) </h2>
            </div>

             {/*View Resume Buttons */}
        
            <button className="bg-indigo-500 mt-6 md:ml-4 flex text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
             <a href="https://drive.google.com/file/d/1909-oKKJPFXLi7hQQftmyn06D6pWJmc3/view?usp=sharing" target="_blank"> View Resume</a>
            </button>
        
          </div>

            {/* hero image section */}
      <div className="mt-10 sm:mt-0">
        <div className="relative w-60 h-80 bg-indigo-600/30 rounded-xl mx-auto transform -rotate-8 hover:rotate-0 transition duration-500">
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