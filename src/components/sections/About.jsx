import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",   
    ];

    const backendSkills = [
        "Spring Boot",
        "Spring Security",
        "REST APIs",
        "JWT",
        "Node.js",
        "MySQL",
    ];

    return(
        <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        >
        <RevealOnScroll>
            <div className="max-w-8xl mx-auto px-4 font-mono">
                <h2 className="text-3xl font-bold  mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 vorder hover:-translate-y-1 transition-all">
                    <p className="font-mono text-gray-300 mb-6 text-center">
                        My name is <strong className="text-blue-500">Cristian Deleon</strong>, 
                        I am an undergraduate Computer Science student from the University of 
                        Houston-Downtown. I strive to make awesome web apps and to continue growing 
                        as a Software Engineer. This is just the beginning. (:
                        </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold font-mono mb-4 ">Front-End</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech) => (
                                    <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full font-mono text-sm
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold font-mono mb-4 ">Back-End</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech) => (
                                    <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full font-mono text-sm
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className=" font-mono p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 font-mono">
                                <li>
                                    <strong>BS in Computer Science</strong> - University of Houston-Downtown <br></br>(Summa Cum Laude)
                                </li>
                                <li>
                                    <strong>Relevant Coursework</strong>: Data Structures & Algorithms, Web Development, Database Systems, Operating Systems
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold font-mono mb-4">Experience</h3>
                            <div className="space-y-4 text-gray-300 font-mono">
                                <div>
                                    <h4 className="font-bold">Undergraduate Researcher, National Science Foundation and CAHSI</h4>
                                    <ul className="list-disc list-inside text-gray-300 font-mono">
                                        <li>Collected and analyzed biometric data (facial expression, heart rate, head rotation) from 20 students</li>
                                        <li>Built a multimodal fusion model using Tensorflow, improving emotion detection accuracy by 20%</li>
                                        <li>Developed a Python app using the Tkinter framework for real-time monitoring and data labeling across coding tasks</li>
                                    </ul>
                                </div>
                                <div className="border-t border-gray-700 pt-4">
                                    <h4 className="font-bold">Software Engineer Intern, Air Force Research Laboratory</h4>
                                    <ul className="list-disc list-inside text-gray-300 font-mono">
                                        <li>Implemented Tensorflow and YOLO models for object detection and object tracking.</li>
                                        <li>Utilized the Nvidia Jetson Nano to integrate the recognition, object-tracking, and decision-making software to expand the concept of an ethical AI system that collects data and returns feedback during simulated operational missions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </RevealOnScroll>  
        </section>
    );
};