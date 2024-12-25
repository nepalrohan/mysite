import pic2 from '../assets/pic2.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const About = () => {

  const handleSocialLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center mt-10 p-5 mb-5'>
      <div className="w-full sm:w-[40%] flex justify-center">
        <img src={pic2} height={350} width={350} />
      </div>
      <div className="w-full sm:w-[60%] flex flex-col mt-5 sm:mt-0">
        <h2 className='text-slate-900 text-2xl font-bold mb-4'>About me</h2>
        <p className='text-gray-600 text-lg text-justify'>
          Hi, I’m Rohan Nepal—a passionate <span className='text-slate-600 text-xl'>software developer </span>and <span className='text-slate-600 text-xl'>content writer</span> currently diving into the world of Computer Science as a third-year student. With a knack for crafting elegant solutions, I specialize in full-stack web development, seamlessly blending frontend creativity with backend logic. My journey revolves around turning ideas into impactful digital experiences, fueled by curiosity and a love for learning. Whether it’s building scalable applications or weaving compelling narratives through content, I thrive on creating value that resonates. Let’s innovate, collaborate, and make the web a better place—one line of code at a time!
        </p>

        <div>
          <h3 className='mt-5 text-gray-700 font-bold mb-4'>Get Connected Here:</h3>
          <div className='flex gap-4'>
            <FaLinkedin
              onClick={() => handleSocialLink('https://www.linkedin.com/in/rohan-nepal-42300b29a/')} 
             className='text-slate-900 text-2xl cursor-pointer hover:text-indigo-900' />
            <FaGithub
              onClick={() => handleSocialLink('https://github.com/nepalrohan')} 
            className='text-slate-900 text-2xl cursor-pointer hover:text-gray-600' />
            <FaFacebookSquare
              onClick={() => handleSocialLink('https://www.facebook.com/swoopna.rohan.5')} 
            className='text-slate-900 text-2xl cursor-pointer hover:text-indigo-600' />
            <FaInstagram
              onClick={() => handleSocialLink('https://www.instagram.com/rkrohannepal002n')} 
            className='text-slate-900 text-2xl cursor-pointer hover:text-purple-800' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
