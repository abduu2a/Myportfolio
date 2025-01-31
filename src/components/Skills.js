import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    languages: [
      { name: 'C++', proficiency: 90, color: 'bg-blue-500' },
      { name: 'Java', proficiency: 85, color: 'bg-orange-500' },
      { name: 'Python', proficiency: 60, color: 'bg-yellow-500' },
      { name: 'JavaScript', proficiency: 75, color: 'bg-yellow-400' },
      { name: 'PHP', proficiency: 70, color: 'bg-purple-500' }
    ],
    frameworks: [
      { name: 'React', proficiency: 55, color: 'bg-cyan-500' },
      { name: 'Flutter', proficiency: 65, color: 'bg-blue-400' },
      { name: 'Node.js', proficiency: 50, color: 'bg-green-500' },
      { name: 'MySQL', proficiency: 80, color: 'bg-blue-600' },
      { name: 'Git', proficiency: 75, color: 'bg-orange-600' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div name='skills' className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='pb-8'
        >
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Skills
          </p>
          <p className='py-6 text-gray-300'>
            These are the technologies I've worked with and their proficiency levels
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='grid md:grid-cols-2 gap-8'
        >
          {/* Languages */}
          <motion.div
            variants={itemVariants}
            className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow'
          >
            <h3 className='text-xl font-bold text-cyan-500 mb-4'>Programming Languages</h3>
            <div className='space-y-4'>
              {skills.languages.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='relative'
                >
                  <div className='flex justify-between text-sm mb-1'>
                    <span className='text-gray-300'>{skill.name}</span>
                    <span className='text-gray-400'>{skill.proficiency}%</span>
                  </div>
                  <div className='h-2 bg-gray-700 rounded-full overflow-hidden'>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Tools */}
          <motion.div
            variants={itemVariants}
            className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow'
          >
            <h3 className='text-xl font-bold text-cyan-500 mb-4'>Frameworks & Tools</h3>
            <div className='space-y-4'>
              {skills.frameworks.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='relative'
                >
                  <div className='flex justify-between text-sm mb-1'>
                    <span className='text-gray-300'>{skill.name}</span>
                    <span className='text-gray-400'>{skill.proficiency}%</span>
                  </div>
                  <div className='h-2 bg-gray-700 rounded-full overflow-hidden'>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Features */}
          <motion.div
            variants={itemVariants}
            className='md:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow'
          >
            <h3 className='text-xl font-bold text-cyan-500 mb-4'>Additional Skills</h3>
            <div className='grid md:grid-cols-3 gap-4 text-gray-300'>
              <div>
                <h4 className='font-semibold text-white mb-2'>Development</h4>
                <ul className='space-y-1'>
                  <li>• REST API Design</li>
                  <li>• Database Design</li>
                  <li>• System Architecture</li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold text-white mb-2'>Tools</h4>
                <ul className='space-y-1'>
                  <li>• VS Code</li>
                  <li>• GitHub</li>
                  <li>• Postman</li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold text-white mb-2'>Soft Skills</h4>
                <ul className='space-y-1'>
                  <li>• Problem Solving</li>
                  <li>• Team Collaboration</li>
                  <li>• Project Management</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
