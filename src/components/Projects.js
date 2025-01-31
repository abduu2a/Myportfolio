import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSpinner } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi';
import { toast } from 'react-toastify';

// Import hospital images
import hospitalImg1 from './my image/Art.jpg';
import hospitalImg2 from './my image/Artabut.jpg';
import hospitalImg3 from './my image/contact.png';
import hospitalImg4 from './my image/doc.jpg';
import hospitalImg5 from './my image/history.jpg';
import hospitalImg6 from './my image/home.jpg';
import hospitalImg7 from './my image/last.jpg';
import hospitalImg8 from './my image/piv8.jpg';

// Import DDU Planner images
import dduPlannerImg1 from './my image/DDU Planner.jpg';
import dduPlannerImg2 from './my image/DDU Planner 2.png';

const Projects = () => {
  const [currentHospitalIndex, setCurrentHospitalIndex] = useState(0);
  const [currentPlannerIndex, setCurrentPlannerIndex] = useState(0);
  const [loadingStates, setLoadingStates] = useState({});
  const [errorStates, setErrorStates] = useState({});
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);

  const handleImageLoad = (imageId) => {
    setLoadingStates(prev => ({ ...prev, [imageId]: false }));
    setErrorStates(prev => ({ ...prev, [imageId]: false }));
  };

  const handleImageError = (imageId) => {
    setLoadingStates(prev => ({ ...prev, [imageId]: false }));
    setErrorStates(prev => ({ ...prev, [imageId]: true }));
    toast.error(`Failed to load image: ${imageId}`);
  };

  const hospitalImages = [
    { id: 'hospital1', src: hospitalImg1, caption: 'Hospital Main Entrance' },
    { id: 'hospital2', src: hospitalImg2, caption: 'About Section' },
    { id: 'hospital3', src: hospitalImg3, caption: 'Contact Information' },
    { id: 'hospital4', src: hospitalImg4, caption: 'Doctor Profiles' },
    { id: 'hospital5', src: hospitalImg5, caption: 'Hospital History' },
    { id: 'hospital6', src: hospitalImg6, caption: 'Homepage View' },
    { id: 'hospital7', src: hospitalImg7, caption: 'Services Overview' },
    { id: 'hospital8', src: hospitalImg8, caption: 'Patient Care' }
  ];

  const dduPlannerImages = [
    { id: 'planner1', src: dduPlannerImg1, caption: 'Planner Dashboard' },
    { id: 'planner2', src: dduPlannerImg2, caption: 'Schedule View' }
  ];

  // Auto-rotate images with different intervals for each project
  useEffect(() => {
    if (!isAutoPlayEnabled) return;

    const hospitalTimer = setInterval(() => {
      setCurrentHospitalIndex((prev) => (prev + 1) % hospitalImages.length);
    }, 4000);

    const plannerTimer = setInterval(() => {
      setCurrentPlannerIndex((prev) => (prev + 1) % dduPlannerImages.length);
    }, 5000);

    return () => {
      clearInterval(hospitalTimer);
      clearInterval(plannerTimer);
    };
  }, [isAutoPlayEnabled]);

  // Preload images
  useEffect(() => {
    const preloadImage = (imageObj) => {
      setLoadingStates(prev => ({ ...prev, [imageObj.id]: true }));
      const img = new Image();
      img.src = imageObj.src;
      img.onload = () => handleImageLoad(imageObj.id);
      img.onerror = () => handleImageError(imageObj.id);
    };

    [...hospitalImages, ...dduPlannerImages].forEach(preloadImage);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Art General Hospital Website',
      description: 'A comprehensive hospital management system focused on handling patient records, doctor schedules, and healthcare operations',
      images: hospitalImages,
      currentImage: hospitalImages[currentHospitalIndex],
      demo: 'https://example.com',
      code: 'https://github.com/abduu2a/project1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 2,
      title: 'DDU Planner',
      description: 'A well-designed student schedule management tool for Dire Dawa University, helping students stay organized and on track',
      images: dduPlannerImages,
      currentImage: dduPlannerImages[currentPlannerIndex],
      demo: 'https://example.com',
      code: 'https://github.com/abduu2a/ddu-planner',
      technologies: ['React', 'Tailwind CSS', 'Local Storage']
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Tailwind CSS',
      image: 'https://via.placeholder.com/800x600?text=Project+3',
      demo: 'https://demo-link-3.com',
      code: 'https://github.com/yourusername/project3',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion']
    }
  ];

  const handleProjectClick = (type, title) => {
    toast.info(`Opening ${type} for ${title}...`);
  };

  const handleImageChange = (projectId, index) => {
    setIsAutoPlayEnabled(false); // Disable autoplay when manually changing images
    if (projectId === 1) {
      setCurrentHospitalIndex(index);
    } else if (projectId === 2) {
      setCurrentPlannerIndex(index);
    }
  };

  const handleMouseEnter = () => {
    setIsAutoPlayEnabled(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlayEnabled(true);
  };

  return (
    <div name='portfolio' className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='pb-8'
        >
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work</p>
        </motion.div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8'>
          {projects.map(({ id, title, description, images, currentImage, image, demo, code, technologies }) => (
            <motion.div 
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className='relative group h-48'>
                <AnimatePresence mode='wait'>
                  {loadingStates[currentImage?.id] && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className='absolute inset-0 flex items-center justify-center bg-gray-900'
                    >
                      <FaSpinner className='animate-spin text-4xl text-cyan-500' />
                    </motion.div>
                  )}
                  {errorStates[currentImage?.id] ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className='absolute inset-0 flex flex-col items-center justify-center bg-gray-900'
                    >
                      <BiErrorCircle className='text-4xl text-red-500 mb-2' />
                      <p className='text-sm text-gray-400'>Failed to load image</p>
                    </motion.div>
                  ) : (
                    <motion.img
                      key={currentImage?.id}
                      src={currentImage?.src || image}
                      alt={`${title} - ${currentImage?.caption}`}
                      className='w-full h-48 object-cover object-center'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>

                <motion.div 
                  className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div 
                    className='absolute bottom-0 left-0 right-0 p-4 text-white'
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className='text-sm font-medium'>{currentImage?.caption}</p>
                  </motion.div>
                </motion.div>

                {images && (
                  <div className='absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-white text-xs'>
                    {(id === 1 ? currentHospitalIndex : currentPlannerIndex) + 1}/{images.length}
                  </div>
                )}

                {images && (
                  <div className='absolute bottom-2 right-2 flex gap-1.5 bg-black/30 p-1.5 rounded-full backdrop-blur-sm'>
                    {images.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleImageChange(id, index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          (id === 1 ? currentHospitalIndex : currentPlannerIndex) === index
                            ? 'bg-cyan-500 scale-125'
                            : 'bg-gray-400 hover:bg-gray-300 hover:scale-110'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`View image ${index + 1} - ${images[index].caption}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className='p-5'>
                <h3 className='text-xl font-bold mb-2'>{title}</h3>
                <p className='text-gray-300 mb-4'>{description}</p>
                
                <div className='flex flex-wrap gap-2 mb-4'>
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className='bg-gray-700 px-2 py-1 rounded text-sm text-gray-300'
                      whileHover={{ scale: 1.05, backgroundColor: '#374151' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className='flex justify-between items-center'>
                  <motion.a
                    href={demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={() => handleProjectClick('demo', title)}
                    className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg flex items-center gap-2'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Demo <FaExternalLinkAlt />
                  </motion.a>
                  <motion.a
                    href={code}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={() => handleProjectClick('code', title)}
                    className='text-white hover:text-cyan-500 transition-colors'
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
