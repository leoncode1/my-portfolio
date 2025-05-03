import { RevealOnScroll } from "../RevealOnScroll";
import pokepetImg4 from "../../assets/pokepet-img4.png"; // Adjust the path as necessary
import portImg from "../../assets/port-img.png"; // Adjust the path as necessary
export const Projects = () => {
    return(
        <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-9xl px-8 font-mono">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                        Featured Projects 
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                            >
                            <img 
                                src="" // Replace with the actual path to your image
                                alt="Image Coming Soon" 
                                className="w-full h-40 object-cover rounded-md mb-4" 
                            />
                            <h3 className="text-xl font-bold mb-2">Campus Connect Web App</h3>
                            <p className="text-gray-400 mb-4">Scalable cloud infrastructure.</p>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Node.js", "AWS"].map((tech, key) => (
                                    <span 
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a 
                                href="#"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >View GitHub Repo</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                            >
                            <img 
                                src={pokepetImg4} // Replace with the actual path to your image
                                alt="PokePet Web App Screenshot" 
                                className="w-full h-40 object-cover rounded-md mb-4" 
                            />
                            <h3 className="text-xl font-bold mb-2">PokePet Web App</h3>
                            <p className="text-gray-400 mb-4">- Created a browser-based web app simulating real-time tracking and management using dynamic APIs using JavaScript, HTML, and CSS 
                                <br></br>- Utilized Git for source control and deployed to GitHub Pages</p>
                            <div className="flex flex-wrap gap-2">
                                {["JavaScript", "HTML", "CSS", "APIs", "GitHub Pages"].map((tech, key) => (
                                    <span 
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full font-mono text-sm
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a 
                                href="https://github.com/leoncode1/PokePet"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="PoketPet GitHub Repo"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >View GitHub Repo</a>
                                <a 
                                href="https://leoncode1.github.io/PokePet/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="PoketPet Website"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >Visit Website</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                            >
                            <img 
                                src={portImg} // Replace with the actual path to your image
                                alt="PokePet Web App Screenshot" 
                                className="w-full h-40 object-cover rounded-md mb-4" 
                            />
                            <h3 className="text-xl font-bold mb-2">Portfolio Web App</h3>
                            <p className="text-gray-400 mb-4">- Created a browser-based web app simulating real-time tracking and management using dynamic APIs using JavaScript, HTML, and CSS 
                                <br></br>- Utilized Git for source control and deployed to GitHub Pages</p>
                            <div className="flex flex-wrap gap-2">
                                {["JavaScript", "HTML", "CSS", "APIs", "GitHub Pages"].map((tech, key) => (
                                    <span 
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full font-mono text-sm
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a 
                                href="https://github.com/leoncode1/PokePet"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="PoketPet GitHub Repo"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >View GitHub Repo 
                                <br></br>(<span className="text-red-400">Adding Soon</span>)</a>
                                <a 
                                href="https://leoncode1.github.io/PokePet/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="PoketPet Website"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >Visit Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};