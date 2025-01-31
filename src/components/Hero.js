import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { toast } from 'react-toastify';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdWavingHand } from 'react-icons/md';
import profilePic from './my image/Abdul fetah.jpg';

const Hero = () => {
  useEffect(() => {
    toast.success('Welcome to my portfolio!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 gap-8'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col justify-center flex-1'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            <h3 className='text-gray-400 text-xl flex items-center gap-2'>
              Hello, I'm <MdWavingHand className="text-yellow-400 animate-wave" />
            </h3>
            <h2 className='text-4xl sm:text-7xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text py-2'>
              Abdulfetah Jemal
            </h2>
            <h3 className='text-4xl sm:text-5xl font-bold text-gray-400 flex flex-col sm:flex-row items-start sm:items-center gap-2'>
              <span>Full Stack</span>
              <span className="text-white">Developer</span>
            </h3>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text-gray-400 py-4 max-w-md text-lg'
          >
            I have extensive experience building and designing software.
            Currently, I specialize in creating exceptional web applications using
            React, Tailwind, Next.js, and GraphQL.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight size={25} className='ml-1' />
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/abduu2a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 duration-200 p-2 rounded-full hover:bg-gray-800"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                title="Visit my GitHub profile"
              >
                <FaGithub size={30} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/Abdulfetahjemal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 duration-200 p-2 rounded-full hover:bg-gray-800"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                title="Connect with me on LinkedIn"
              >
                <FaLinkedin size={30} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='relative md:w-1/2 w-3/4'
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative ring-4 ring-gray-900 rounded-full">
              <img
                src={profilePic}
                alt="Abdulfetah Jemal"
                className='rounded-full w-full object-cover shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/50 transition duration-300'
                style={{ aspectRatio: '1/1' }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
