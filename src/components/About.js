import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';

const About = () => {
  const technologies = ['C++', 'Java', 'Python', 'JavaScript', 'PHP', 'React', 'Flutter'];

  return (
    <div name='about' className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='pb-8'
        >
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About Me
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-lg'
          >
            <div className='flex items-start gap-3 mb-6'>
              <FaCode className='text-2xl text-cyan-500 mt-1 flex-shrink-0' />
              <p className='text-gray-300'>
                Hey there! I'm <span className='text-white font-semibold'>Abdulfetah Jemal</span>, 
                a software developer with a passion for building impactful digital solutions. 
                I specialize in full-stack web and mobile app development, working with:
                <div className='flex flex-wrap gap-2 mt-2'>
                  {technologies.map((tech, index) => (
                    <span key={index} className='bg-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors'>
                      {tech}
                    </span>
                  ))}
                </div>
              </p>
            </div>

            <div className='flex items-start gap-3 mb-6'>
              <IoSchool className='text-2xl text-cyan-500 mt-1 flex-shrink-0' />
              <p className='text-gray-300'>
                I'm currently studying at <span className='text-white font-semibold'>Dire Dawa University</span>, 
                constantly sharpening my skills and pushing myself to new heights.
              </p>
            </div>

            <div className='flex items-start gap-3 mb-6'>
              <FaLaptopCode className='text-2xl text-cyan-500 mt-1 flex-shrink-0' />
              <p className='text-gray-300'>
                Beyond coding, I have an entrepreneurial mindset—working on projects like 
                <span className='text-white font-semibold'> EthioNexus</span> and 
                <span className='text-white font-semibold'> Blanckspace (Lumina)</span>, 
                a next-gen search engine. I also developed 
                <span className='text-white font-semibold'> DDU Planner</span>, 
                a well-designed tool to help students stay on top of their schedules.
              </p>
            </div>

            <div className='flex items-start gap-3'>
              <FaRocket className='text-2xl text-cyan-500 mt-1 flex-shrink-0' />
              <p className='text-gray-300'>
                I believe in innovation, efficiency, and creating tech that actually makes a difference. 
                If you're looking for someone who's always learning, always building, and always 
                striving for the best—let's connect!
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className='mt-8 text-center md:text-left'
            >
              <p className='text-cyan-500 font-bold text-xl'>
                🚀 Code. Create. Innovate.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='grid grid-cols-1 gap-4'
          >
            <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow'>
              <h3 className='text-xl font-bold text-cyan-500 mb-4'>Technical Projects</h3>
              
              <div className='space-y-6'>
                <div>
                  <h4 className='text-white font-semibold flex items-center gap-2 mb-2'>
                    <span className='bg-blue-500 px-2 py-1 rounded text-sm'>C++</span>
                  </h4>
                  <div className='text-gray-300 pl-4 border-l-2 border-gray-700'>
                    <p className='mb-2'>
                      <span className='text-white font-medium'>Sabian General Hospital</span> – 
                      A hospital management system designed to streamline patient records, appointments, and staff management.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className='text-white font-semibold flex items-center gap-2 mb-2'>
                    <span className='bg-orange-500 px-2 py-1 rounded text-sm'>Java & OOP</span>
                  </h4>
                  <div className='text-gray-300 pl-4 border-l-2 border-gray-700'>
                    <p className='mb-2'>
                      <span className='text-white font-medium'>Supermarket Billing System</span> – 
                      A structured and efficient billing system implementing object-oriented programming principles.
                    </p>
                    <p className='mb-2'>
                      <span className='text-white font-medium'>Tic-Tac-Toe Game</span> – 
                      A classic two-player game with an interactive interface.
                    </p>
                    <p className='mb-2'>
                      <span className='text-white font-medium'>Chat Application</span> – 
                      A real-time messaging application with a user-friendly interface.
                    </p>
                    <p className='mb-2'>
                      <span className='text-white font-medium'>Art General Hospital</span> – 
                      A hospital management system focused on handling patient records and doctor schedules.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className='text-white font-semibold flex items-center gap-2 mb-2'>
                    <span className='bg-green-500 px-2 py-1 rounded text-sm'>Database</span>
                  </h4>
                  <div className='text-gray-300 pl-4 border-l-2 border-gray-700'>
                    <p className='mb-2'>
                      <span className='text-white font-medium'>Hilwa Pharmacy</span> – 
                      Comprehensive pharmacy management system with inventory and sales tracking.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className='text-white font-semibold flex items-center gap-2 mb-2'>
                    <span className='bg-purple-500 px-2 py-1 rounded text-sm'>DSA</span>
                  </h4>
                  <div className='text-gray-300 pl-4 border-l-2 border-gray-700'>
                    <p className='mb-2'>
                      <span className='text-white font-medium'>Supermarket Management System</span> – 
                      Efficient system utilizing advanced data structures and algorithms.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className='text-white font-semibold flex items-center gap-2 mb-2'>
                    <span className='bg-cyan-500 px-2 py-1 rounded text-sm'>Web Development</span>
                  </h4>
                  <div className='text-gray-300 pl-4 border-l-2 border-gray-700'>
                    <p className='mb-2'>
                      <span className='text-white font-medium'>EthioNexus</span> – 
                      Digital solutions platform for Ethiopian market.
                    </p>
                    <p className='mb-2'>
                      <span className='text-white font-medium'>Blanckspace (Lumina)</span> – 
                      Next-generation search engine project.
                    </p>
                    <p className='mb-2'>
                      <span className='text-white font-medium'>DDU Planner</span> – 
                      Student schedule management tool for Dire Dawa University.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow'>
              <h3 className='text-xl font-bold text-cyan-500 mb-4'>Skills & Technologies</h3>
              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <h4 className='text-white font-semibold mb-3'>Languages</h4>
                  <div className='space-y-3'>
                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-300'>C++</span>
                        <span className='text-gray-400'>90%</span>
                      </div>
                      <div className='h-2 bg-gray-700 rounded-full'>
                        <div className='h-full bg-blue-500 rounded-full' style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-300'>Java</span>
                        <span className='text-gray-400'>85%</span>
                      </div>
                      <div className='h-2 bg-gray-700 rounded-full'>
                        <div className='h-full bg-orange-500 rounded-full' style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-300'>Python</span>
                        <span className='text-gray-400'>60%</span>
                      </div>
                      <div className='h-2 bg-gray-700 rounded-full'>
                        <div className='h-full bg-yellow-500 rounded-full' style={{width: '60%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-300'>JavaScript</span>
                        <span className='text-gray-400'>75%</span>
                      </div>
                      <div className='h-2 bg-gray-700 rounded-full'>
                        <div className='h-full bg-yellow-400 rounded-full' style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-300'>PHP</span>
                        <span className='text-gray-400'>70%</span>
                      </div>
                      <div className='h-2 bg-gray-700 rounded-full'>
                        <div className='h-full bg-purple-500 rounded-full' style={{width: '70%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='text-white font-semibold mb-3'>Frameworks & Tools</h4>
                  <div className='space-y-3'>
                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-300'>React</span>
                        <span className='text-gray-400'>55%</span>
                      </div>
                      <div className='h-2 bg-gray-700 rounded-full'>
                        <div className='h-full bg-cyan-500 rounded-full' style={{width: '55%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-300'>Flutter</span>
                        <span className='text-gray-400'>65%</span>
                      </div>
                      <div className='h-2 bg-gray-700 rounded-full'>
                        <div className='h-full bg-blue-400 rounded-full' style={{width: '65%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-300'>Node.js</span>
                        <span className='text-gray-400'>50%</span>
                      </div>
                      <div className='h-2 bg-gray-700 rounded-full'>
                        <div className='h-full bg-green-500 rounded-full' style={{width: '50%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-300'>MySQL</span>
                        <span className='text-gray-400'>80%</span>
                      </div>
                      <div className='h-2 bg-gray-700 rounded-full'>
                        <div className='h-full bg-blue-600 rounded-full' style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-300'>Git</span>
                        <span className='text-gray-400'>75%</span>
                      </div>
                      <div className='h-2 bg-gray-700 rounded-full'>
                        <div className='h-full bg-orange-600 rounded-full' style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow'>
              <h3 className='text-xl font-bold text-cyan-500 mb-2'>Education</h3>
              <p className='text-gray-300'>
                Currently pursuing my degree at Dire Dawa University, focusing on Computer Science 
                and Software Engineering principles. Actively applying theoretical knowledge through practical projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
