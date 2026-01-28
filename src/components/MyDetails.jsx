import { FaCode, FaGraduationCap, FaLaptopCode, FaRocket, FaDatabase } from "react-icons/fa";

const MyDetails = () => {
    return (
        <section className="py-12 px-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl text-indigo-600 font-bold mb-8 flex items-center gap-2">
                <FaCode /> My Journey
            </h2>

            <div className="space-y-8 text-lg leading-relaxed text-gray-700">
                {/* Education Section */}
                <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-600 transition-colors duration-300">
                        <FaGraduationCap className="text-indigo-600 group-hover:text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">Academic Foundation</h3>
                        <p>
                            Completed <strong>SSC in 2018</strong> and <strong>HSC in 2020</strong>. Currently pursuing a <strong>B.Sc. in CSE</strong> at <strong>City University, Bangladesh</strong> (2022–2026). My academic journey has provided a strong foundation in core computer science principles and problem-solving.
                        </p>
                    </div>
                </div>

                {/* Technical Evolution */}
                <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-600 transition-colors duration-300">
                        <FaLaptopCode className="text-indigo-600 group-hover:text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">MERN Stack & Beyond</h3>
                        <p>
                            In 2024, I completed the <strong>Complete Web Development Course</strong> by <strong>Programming Hero</strong>, mastering <strong>React, Node.js, and MongoDB</strong>. I have since evolved into <strong>TypeScript</strong> and modern ORMs like <strong>Prisma</strong> with <strong>PostgreSQL</strong> to build more secure and scalable architectures.
                        </p>
                    </div>
                </div>

                {/* Professional Goals */}
                <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-600 transition-colors duration-300">
                        <FaRocket className="text-indigo-600 group-hover:text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">Vision & Impact</h3>
                        <p>
                            I specialize in building <strong>enterprise-level applications</strong> with multi-step approval workflows and role-based access. My ultimate goal is to become a <strong>Senior Software Engineer</strong>, contributing to robust open-source projects and building tools that make a meaningful impact on the global tech ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyDetails;