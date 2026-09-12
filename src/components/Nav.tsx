import navLogo from '../assets/hamburger.png';
import logo from '../assets/logo-text.png';
const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto">
        <div className='flex items-center justify-between py-5 px-4'>

          <div className='md:hidden'>
            <a href="#"><img className='cursor-pointer w-6 mr-9' src={navLogo} alt="" /></a>
          </div>

          <div>
            <img src={logo} alt="" />
          </div>

          <div className='hidden md:block'>
            <ul className='flex items-center gap-8 text-sm text-gray-600'>
              <li><a href="#" className='text-brand'>Home</a></li>
              <li><a
                href="#"
                className='text-gray-700 transition-colors hover:text-brand'>Technologies</a></li>
              <li><a href="#"
                className='text-gray-700 transition-colors hover:text-brand'>Projects</a></li>
              <li><a href="#"
                className='text-gray-700 transition-colors hover:text-brand'>About</a></li>
              <li><a href="#"
                className='text-gray-700 transition-colors hover:text-brand'>Contact</a></li>
            </ul>
          </div>

          <div className='flex items-center gap-3'>
            <button className='tetst-gray-800 text-sm transition-colors duration-300 hover:text-brand cursor-pointer'>
              Sign In
            </button>
            <button className='rounded-full bg-brand px-4 py-2 text-sm text-white transition-colors duration-300 cursor-pointer hover:bg-black'>
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav >
  );
};

export default Nav;