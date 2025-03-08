import quill from '../assets/Untitled.png'
import task from '../assets/movieticket.png'
import chats from '../assets/chat.png'
const projects = [
 
  {
    title: 'Health Project',
    description: 'A seamless Markdown editing experience designed for developers, writers, and content creators, combining functionality, accessibility, and aesthetic appeal.',
    image: quill,
    technologies: ['Html', 'Css', 'Bootstrap'],
    demoUrl: 'https://health-first-ashen.vercel.app/',
    githubUrl: 'https://github.com/RamkumarRam-project/Health_First',
  },
  {
    title: 'Ticket Booking',
    description: 'A modern, feature-rich application designed to help users plan, organize, and visualize project milestones effectively, combining accessibility, intuitive design, and exportable roadmaps.',
    image: task,
    technologies: ['Html', 'Css', 'Javascript','React.js','MongoDB','Node.js'],
    demoUrl: 'https://movie-booking-umber-psi.vercel.app/',
    githubUrl: 'https://github.com/RamkumarRam-project/MovieBooking',
  },
  {
    title: 'Ram Chatbot',
    description: 'A modern, feature-rich application designed to help users plan, organize, and visualize project milestones effectively, combining accessibility, intuitive design, and exportable roadmaps.',
    image: chats,
    technologies: ['Html', 'Css', 'Javascript','MongoDB','API Interaction'],
    demoUrl: 'https://ram-ai-chat.vercel.app/',
    githubUrl: 'https://github.com/RamkumarRam-project/ram-ai-chat',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
/* becodewala */