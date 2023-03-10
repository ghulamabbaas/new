import React from 'react';
import './style.css';
import picture from "../imagep.png";

const Home = () => {
  return (
    <div className='hero'>
      <div className='xl:container mx-auto'>
        <div className='grid grid-cols-12 justify-center md:items-center h-full 2xl:h-screen'>
          <div className='col-span-12 md:col-span-6 text-[#edbd10] md:mx-auto mx-8 md:my-0 my-9 '>
            <p>HELLO!</p>
            <h1 className='heading text-5xl font-bold leading-[50px] tracking-wide'><span>I'm </span>Ghulam</h1>
            <h1 className='text-5xl font-bold leading-10 tracking-wide'>ABBAS</h1>
            <div class="wrapper">
              <div class="typing-demo">
                A Software Developer
              </div>
            </div>
            <div className='flex justify-start'>
              <div>
                <a href='https://pk.linkedin.com/in/ghulam-abbas-b405981ab' className='btn-one'>hire me</a>
              </div>
              <div>
                <a href='#' className='btn-two'>my works</a>
              </div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-6'>
            <img src={picture} alt=''  className='2xl:border-b-2 2xl:border-[#edbd10]'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;