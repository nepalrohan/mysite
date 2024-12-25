import { FaLinkedin, FaGithub, FaFacebookSquare, FaInstagram } from "react-icons/fa";
const Footer = ({onNavigate}) => {

  const handleSocialLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between">
          {/* Quick Links */}
          <div className="flex flex-col sm:w-1/3">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate("home")} className="hover:text-indigo-500">Home</button></li>
              <li><button onClick={() => onNavigate("about")} className="hover:text-indigo-500">About</button></li>
              <li><button onClick={() => onNavigate("services")} className="hover:text-indigo-500">Services</button></li>
              <li><button onClick={() => onNavigate("contact")} className="hover:text-indigo-500">Contact</button></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:w-1/3 mt-8 sm:mt-0">
            <h3 className="text-xl text-orange-400 font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <FaLinkedin
               onClick={() => handleSocialLink('https://www.linkedin.com/in/rohan-nepal-42300b29a/')} 
              className="text-2xl cursor-pointer hover:text-indigo-500" />
              <FaGithub 
               onClick={() => handleSocialLink('https://github.com/nepalrohan')} 
              className="text-2xl cursor-pointer hover:text-gray-500" />
              <FaFacebookSquare
               onClick={() => handleSocialLink('https://www.facebook.com/swoopna.rohan.5')} 
              className="text-2xl cursor-pointer hover:text-indigo-600" />
              <FaInstagram
               onClick={() => handleSocialLink('https://www.instagram.com/rkrohannepal002')} 
               className="text-2xl cursor-pointer hover:text-purple-800" />
            </div>
          </div>

          {/* Hire Now Button */}
          <div className="flex flex-col sm:w-1/3 mt-8 sm:mt-0">
           
          <button
          onClick={()=>onNavigate('contact')}
          className='text-slate-900 font-bold text-lg md:text-xl bg-orange-400 px-6 md:px-8 py-2 mt-8 md:mt-12 rounded-md hover:bg-orange-500'>
          Hire Now
        </button>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Rohan Nepal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
