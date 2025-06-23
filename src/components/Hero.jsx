import heroImage from "../assets/heroimage.png"
const Hero = () => {
    return (
        <div className="md:flex justify-between items-center">

            {/* text section */}
            <div className="text-left px-8 space-y-4 max-w-xl">
        <h2 className="text-2xl sm:text-2xl text-gray-500">Hi there 👋</h2>
        <h1 className="text-3xl sm:text-4xl font-bold">I'm <span className="text-indigo-500">Md Abu Bakar Siddique</span></h1>
        <h2 className="text-2xl sm:text-3xl text-gray-300">A Fullstack developer (MERN) </h2>
            </div>

            {/* hero image section */}
      <div className="mt-10 sm:mt-0">
        <div className="relative w-60 h-80 bg-lime-600 rounded-xl mx-auto transform -rotate-6 hover:rotate-0 transition duration-500">
          <img
            src={heroImage}
            alt="Hero"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
        </div>
    );
};

export default Hero;