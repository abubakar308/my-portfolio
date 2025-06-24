
const Skills = () => {

    const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "https://img.icons8.com/?size=100&id=20909&format=png" },
      { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png" },
      { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png" },
      { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=108784&format=png" },
      { name: "ReactJS", icon: "https://img.icons8.com/?size=100&id=123603&format=png" },
      { name: "NextJS", icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png" },
    ],
  },
  {
    category: "Backend & DB",
    items: [
      { name: "Node JS", icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png" },
      { name: "Express JS", icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png" },
      { name: "MongoDB", icon: "https://img.icons8.com/?size=100&id=74402&format=png" },
      { name: "Firebase", icon: "https://img.icons8.com/?size=100&id=62452&format=png" },
    ],
  },
  {
     category: "Tools",
      items: [
        { name: "Git", icon: "https://img.icons8.com/?size=100&id=20906&format=png" },
        { name: "GitHub", icon: "https://img.icons8.com/?size=100&id=12599&format=png" },
        { name: "Postman", icon: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png" },
      ],
  }
];


    return (
        <section className="bg-gray-50 py-12 text-gray-800">
            <div className="container mx-auto text-center px-4">
                {/* skill title */}
                <h2 className="text-3xl font-bold mb-8">My Skills</h2>

                 {/* skills */}
                {
                    skills.map((skillset, index)=>(<div key={index} className="mb-10 text-left">
                        <h3 className="text-xl font-semibold mb-4">{skillset.category}</h3>
                        <div className="flex flex-wrap gap-4 pb-2">
                            {
                                skillset.items.map((skill, i)=>(<div key={i} className="flex-shrink-0 bg-white rounded-xl shadow-md p-4 w-36 text-center hover:scale-105 transition">
                                    <img src={skill.icon} className="w-12 h-12 mx-auto mb-2" alt={skill.name} />
                                    <p className="text-sm font-medium">{skill.name}</p>
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