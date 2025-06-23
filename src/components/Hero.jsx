import heroomage from "../assets/heroimage.png"
const Hero = () => {
    return (
        <div className="sm:flex justify-between items-center">
            <div>
        <h2 className="text-3xl">Hi there</h2>
        <h2 className="text-3xl">I'm Md Abu Bakar Siddique</h2>
        <h2 className="text-3xl">A passionate web developer</h2>
            </div>
            <div className="bg-amber-400 h-80 w-60 pb- -rotate-10">
        <img className="h-full" src={heroomage} alt="" />
            </div>
        </div>
    );
};

export default Hero;