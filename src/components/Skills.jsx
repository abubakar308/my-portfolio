
const Skills = () => {

    const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "https://img.icons8.com/?size=100&id=20909&format=png" },
      { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png" },
      { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png" },
      { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=108784&format=png" },
      { name: "TypeScript", icon: "https://img.icons8.com/typescript" },
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
        <section className="py-10">
            <div className="container mx-auto text-center px-4">
                {/* skill title */}
                <h2 className="text-3xl text-indigo-600 font-bold mb-6">My Skills</h2>

                 {/* skills */}
                {
                    skills.map((skillset, index)=>(<div key={index} className="mb-8 text-left text-indigo-500 font-semibold">
                        <h3 className="text-xl font-semibold mb-3">{skillset.category}</h3>
                        <div className="flex flex-wrap gap-4 justify-start">
                            {
                                skillset.items.map((skill, i)=>(<div key={i} className="flex-shrink-0 bg-white border border-gray-200 rounded-xl shadow-md p-4 min-w-[130px] text-center hover:scale-105 hover:shadow-lg transition duration-300">
                                    <img src={skill.icon} className="w-12 h-12 mx-auto mb-2" alt={skill.name} />
                                    <p className="text-sm font-semibold text-gray-700">{skill.name}</p>
                                </div>))
                            }
                        </div>
                    </div>))
                }
            </div>
        </section>
    );
};

export default Skills;