/* eslint-disable no-unused-vars */
import React from 'react'
import EmployeeList from './EmployeeList'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
 } from '../config/motion';
import state from '../store';
import { CustomButton } from '../components';

function Home() {
  const snap = useSnapshot(state);

  return (
    <>
    <AnimatePresence>
      {
        snap.intro && (
          <motion.section className='home' {...slideAnimation('left')}>
            <motion.div className='home-content' {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h3 className='head-text'>
                 LET&apos;S <br className='xl:block hidden'/> Buy Some Clothes. 
                </h3>
              </motion.div>
              <motion.div {...headContentAnimation}
              className='flex flex-col gap-10'>
                <p className='max-w-md font-normal text-gray-700 text-base'>
                  Create your unique and exclusive shirts with our brand new 3D Customization Tool. 
                  <strong>Unleash your Inner Creativity</strong> {" "} and define your own Style.
                </p>
                <CustomButton
                 type= "filled"
                 title= "Customize It"
                 handleClick={()=> state.intro = false}
                 customStyles= "w-fit px-4 py-2.5 font-bold text-sm"
                />

              </motion.div>
            </motion.div>
          </motion.section>
        )
      }
    </AnimatePresence>
    </>
  )
}

export default Home