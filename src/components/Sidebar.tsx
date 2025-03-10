import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, User, Code2, Briefcase, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import ram from '../assets/ram.jpg';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: User, label: 'About' },
  { path: '/skills', icon: Code2, label: 'Skills' },
  { path: '/projects', icon: Briefcase, label: 'Projects' },
  { path: '/contact', icon: Mail, label: 'Contact' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-8 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 text-center">
            <img
              src={ram}
              alt="Profile"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold">Ram Kumar</h2>
            <p className="text-gray-600">MernStack Developer</p>


            
          <div className="p-6 border-t flex justify-between items-center">
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://github.com/RamkumarRam-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-600 hover:text-gray-900"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ram-kumar-1a1a31316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-gray-900"
              >
                <Linkedin size={20} />
              </a>
              
            </div>
          </div>
          </div>



          

          <nav className="flex-1 px-4">
            {navItems.map(({ path, icon: Icon, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${isActive ? 'bg-amber-50 text-amber-400' : 'text-gray-700 hover:bg-amber-100'}`
                }
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} className="mr-3" />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
