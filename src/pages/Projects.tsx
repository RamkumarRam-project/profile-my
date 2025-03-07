
import quill from '../assets/quill.png'
import task from '../assets/task.png'

const projects = [
 
  {
    title: 'QuillMark',
    description: 'A seamless Markdown editing experience designed for developers, writers, and content creators, combining functionality, accessibility, and aesthetic appeal.',
    image: quill,
    technologies: ['React', 'TypeScript', 'Marked','React-Split','Tailwind CSS'],
    demoUrl: 'https://quillmark.vercel.app',
    githubUrl: 'https://github.com/becodewala-youtube/QuillMark',
  },
  {
    title: 'TaskTrek',
    description: 'A modern, feature-rich application designed to help users plan, organize, and visualize project milestones effectively, combining accessibility, intuitive design, and exportable roadmaps.',
    image: task,
    technologies: ['React', 'TypeScript', 'Zustand','html2pdf','Tailwind CSS'],
    demoUrl: 'https://tasktrek-becodewala.vercel.app',
    githubUrl: 'https://github.com/becodewala-youtube/TaskTrek',
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
          
             <img src='"E:\Frontend-Portfolio-master\Frontend-Portfolio-master\src\assets\movieticket.png"'
             alt='image'/>
        
        </div>
      </div>
    </div>
  );
}
/* becodewala */