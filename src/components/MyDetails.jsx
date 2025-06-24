import { FaCode, FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";

const MyDetails = () => {
    return (
        <section className="py-10 px-4 rounded-xl shadow-md">
      <h2 className="text-2xl text-indigo-500 font-bold mb-6">My Journey</h2>

      <div className="space-y-4 text-lg leading-relaxed">
        <div className="flex items-start gap-3">
          <FaGraduationCap className="mt-1 text-indigo-600" />
          <p>
            Completed <strong>SSC in 2018</strong> and <strong>HSC in 2020</strong>. Currently pursuing a <strong>B.Sc. in CSE</strong> at City University, Bangladesh (2022–2026). where I continue to gain theoretical knowledge alongside practical experience.
          </p>
        </div>

          {/* Web Development */}
        <div className="flex items-start gap-3">
          <FaLaptopCode className="mt-1 text-indigo-600" />
          <p>
            In early <strong>2024</strong>, I focused deeply on web development and joined the <strong>Complete Web Development Course</strong> by <strong>Programming Hero</strong>. Through this course, I mastered technologies like <strong>React.js, Tailwind CSS, Node.js, Express.js, MongoDB</strong>, and built several real-world full-stack projects.
          </p>
        </div>


       {/* Passion and Goals */}
        <div className="flex items-start gap-3">
          <FaRocket className="mt-1 text-indigo-600" />
          <p>
            I’m passionate about building applications that solve real-world problems — from e-commerce to education. My future goal is to become a <strong>Senior Software Engineer</strong> who not only builds efficient apps but also contributes to open source, mentors junior developers, and continuously learns to stay ahead in the tech industry.
          </p>
        </div>
      </div>
    </section>
    );
};

export default MyDetails;