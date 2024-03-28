import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
            We are a Tunisian solution dedicated to helping you showcase your skills and find your dream job. Our mission is to empower individuals by providing a platform where talents are highlighted and opportunities are abundant.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
          Our platform connects talented individuals with companies looking for their unique skills. Whether you're a developer, designer, marketer, or any other professional, we're here to support you in your career journey. With our user-friendly interface and advanced matching algorithms, finding the perfect job or hiring the right talent has never been easier.
        </p>
        <p>
          Join us today and take the next step towards achieving your career goals. Let's build the future together!
        </p>
      </div>
    </div>
  );
};

export default About;
