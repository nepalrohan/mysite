import logo from '../assets/logo.png'
const Header = ({onNavigate, isMenuOpen, setIsMenuOpen  }) => {

  return (
    <header className="bg-slate-900 text-white shadow-md  z-50 ">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-200">
         

           <img src={logo} height={40}  width={40} />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => onNavigate("home")}  className="hover:text-orange-400 text-gray-200 font-semibold">Home</button>
          <button  onClick={() => onNavigate("about")}  className="hover:text-orange-400 text-gray-200 font-semibold">About</button>
          <button    onClick={() => onNavigate("services")}  className="hover:text-orange-400 text-gray-200 font-semibold">Services</button>
          <button    onClick={() => onNavigate("contact")}  className="hover:text-orange-400 text-gray-200 font-semibold">Contact</button>
        </nav>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden ">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl  ">
            {isMenuOpen ? '×' : '≡'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 z-30 flex flex-col items-start   absolute w-full h-full text-white p-4 space-y-4">
          <button  onClick={() => {onNavigate("home") 
            setIsMenuOpen(false)}}   className="block hover:text-indigo-500 text-xl font-semibold border-b ">Home</button>
          <button onClick={() => {onNavigate("about") 
            setIsMenuOpen(false)} }   className="block hover:text-indigo-500  text-xl font-semibold border-b">About</button>
          <button onClick={() => {onNavigate("services") 
            setIsMenuOpen(false)
          }}      className="block hover:text-indigo-500 border-b  text-xl font-semibold ">Services</button>
          <button onClick={() => {onNavigate("contact") 
            setIsMenuOpen(false)}}  className="block hover:text-indigo-500  text-xl font-semibold border-b">Contact</button>
        </div>
      )}
    </header>
  );
}

export default Header;
