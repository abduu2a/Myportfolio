import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com',
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com',
    },
    {
      id: 3,
      child: (
        <>
          <FaTwitter size={30} />
        </>
      ),
      href: 'https://twitter.com',
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Abdulfetah Jemal</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            {links.map(({ id, child, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {child}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p> {new Date().getFullYear()} Abdulfetah Jemal Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
