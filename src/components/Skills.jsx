
const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: "https://img.icons8.com/?size=100&id=20909&format=png" },
        { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png" },
        { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png" },
        { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=108784&format=png" },
        { name: "TypeScript", icon: "https://img.icons8.com/color/48/typescript.png" }, // Clean icon
        { name: "ReactJS", icon: "https://img.icons8.com/?size=100&id=123603&format=png" },
        { name: "NextJS", icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png" },
      ],
    },
    {
      category: "Backend & DB",
      items: [
        { name: "Node JS", icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png" },
        { name: "Express JS", icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png" },
        { name: "Prisma", icon: "https://img.icons8.com/?size=100&id=zJh5Gyrd6ZKu&format=png&color=000000" },
        { name: "MongoDB", icon: "https://img.icons8.com/?size=100&id=74402&format=png" },
        { name: "PostgreSQL", icon: "https://img.icons8.com/?size=100&id=38561&format=png" },
        { name: "Firebase", icon: "https://img.icons8.com/?size=100&id=62452&format=png" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: "https://img.icons8.com/?size=100&id=20906&format=png" },
        { name: "GitHub", icon: "https://img.icons8.com/?size=100&id=12599&format=png" },
        { name: "Postman", icon: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png" },
        { name: "Vercel", icon: "https://img.icons8.com/?size=100&id=38283&format=png" },
      ],
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-4xl text-center text-indigo-600 font-extrabold mb-12">My Technical Skills</h2>

        <div className="space-y-8">
          {skills.map((skillset, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-indigo-500 pl-4">
                {skillset.category}
              </h3>
              
              <div className="flex flex-wrap gap-4 justify-start">
                {skillset.items.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 bg-white border border-indigo-50 px-5 py-3 rounded-xl shadow-sm hover:border-indigo-500 hover:shadow-indigo-100 hover:-translate-y-1 transition-all duration-300 cursor-default group"
                  >
                    <img 
                      src={skill.icon} 
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" 
                      alt={skill.name} 
                    />
                    <span className="text-base font-bold text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;