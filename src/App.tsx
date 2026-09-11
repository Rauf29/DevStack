import './App.css';
import bannerImg from './assets/banner-stack.png';
import navLogo from './assets/hamburger.png';
import logo from './assets/logo-text.png';

function App() {
  return (
    <>
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
              <button className='tetst-gray-800 text-sm transition-colors hover:text-brand cursor-pointer'>
                Sign In
              </button>
              <button className='rounded-full bg-brand px-4 py-2 text-sm text-white transition-colors cursor-pointer hover:bg-black'>
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </nav >

      <section className='py-10 px-4 md:py-24'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center justify-between gap-10 md:flex-row '>

            <div className=' space-y-5 text-center md:text-left'>
              <h1 className='text-4xl md:text-6xl font-extrabold text-gray-900'>
                Build Your Ideal <br />
                <span className='bg-gradient-to-r from-orange-500 via-brand to-purple-600 text-transparent bg-clip-text'>
                  Development Stack
                </span>
              </h1>
              <p className=' max-w-lg text-sm leading-6 text-gray-500 md:text-lg'>
                Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that
                fits your next project.
              </p>
              <div className=' space-x-2 mt-10'>
                <button className=' w-[168px] cursor-pointer rounded-md bg-gradient-to-r from-orange-500 to-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-black'>Explore Technologies</button>
                <button className=' w-[168px] cursor-pointer rounded-md border bg-white border-gray-200 px-4 py-3 text-sm text-gray-600 transition-colors hover:border-brand hover:text-brand'>Learn More</button>
              </div>
            </div>

            <div>
              <img className='w-80 md:w-auto' src={bannerImg} alt="" />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default App
