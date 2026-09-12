import { FaStar } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import reactIcon from '../public/icon/react.png';
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
                <button className=' w-[168px] cursor-pointer rounded-md bg-gradient-to-r from-orange-500 to-brand px-4 py-3 text-sm font-semibold text-white hover:bg-black transition-colors duration-500 hover:bg-gradient-to-l hover:from-brand hover:to-orange-500'>Explore Technologies</button>
                <button className=' w-[168px] cursor-pointer rounded-md border bg-white border-gray-200 px-4 py-3 text-sm text-gray-600 transition-colors duration-300 hover:border-brand hover:text-brand'>Learn More</button>
              </div>
            </div>

            <div>
              <img className='w-80 md:w-auto' src={bannerImg} alt="" />
            </div>

          </div>
        </div>
      </section>

      <section className='px-4 pb-10 md:pb-24 border-b border-gray-200'>
        <div className='container mx-auto'>

          <div className='mb-8'>
            <h2 className=' text-4xl font-extrabold text-gran-900'>
              Explore the {' '}<span className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>          Technologies
              </span>
            </h2>
            <p className='mt-2 text-base text-gray-500'>
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className='grid gap-5 lg:grid-cols-[1fr_280px]'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>

              {/* Card */}

              <div className=' rounded-2xl border border-gray-200 p-5 flex flex-col justify-between transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50'>
                <div className='space-y-5'>
                  <div className='mb-3 flex items-center justify-between mb-2'>
                    <span>
                      <img src={reactIcon} alt="" />
                    </span>
                    <span className='rounded-full bg-blue-50 px-[12px] py-[4px] text-[11px] text-blue-500 font-semibold'>
                      Popular
                    </span>
                  </div>

                  <h3 className='text-lg font-bold text-gray-900'>
                    React.js
                  </h3>

                  <p className=" text-[12px] text-gray-500 mb-6">
                    A declarative, component-based JavaScript library for building
                    modern user interfaces.
                  </p>
                </div>

                <div className='space-y-5'>
                  <div className='flex items-center justify-between'>
                    <span className="rounded-full bg-gray-100 px-2 py-[2px] text-[11px]">
                      Frontend
                    </span>

                    <span className="text-[11px]">
                      Beginner-Friendly
                    </span>

                    <span className='text-[11px] flex items-center gap-1'><span className=' text-amber-300'><FaStar /></span>
                      4.9</span>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-gray-950 py-2 text-[12px] text-white transition hover:bg-brand cursor-pointer">
                    Add to Stack
                  </button>
                </div>
              </div>

              <div className=' rounded-2xl border border-gray-200 p-5 flex flex-col justify-between transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50'>
                <div className='space-y-5'>
                  <div className='mb-3 flex items-center justify-between mb-2'>
                    <span>
                      <img src={reactIcon} alt="" />
                    </span>
                    <span className='rounded-full bg-blue-50 px-[12px] py-[4px] text-[11px] text-blue-500 font-semibold'>
                      Popular
                    </span>
                  </div>

                  <h3 className='text-lg font-bold text-gray-900'>
                    React.js
                  </h3>

                  <p className=" text-[12px] text-gray-500 mb-6">
                    A declarative, component-based JavaScript library for building
                    modern user interfaces.
                  </p>
                </div>

                <div className='space-y-5'>
                  <div className='flex items-center justify-between'>
                    <span className="rounded-full bg-gray-100 px-2 py-[2px] text-[11px]">
                      Frontend
                    </span>

                    <span className="text-[11px]">
                      Beginner-Friendly
                    </span>

                    <span className='text-[11px] flex items-center gap-1'><span className=' text-amber-300'><FaStar /></span>
                      4.9</span>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-gray-950 py-2 text-[12px] text-white transition hover:bg-brand cursor-pointer">
                    Add to Stack
                  </button>
                </div>
              </div>

              <div className=' rounded-2xl border border-gray-200 p-5 flex flex-col justify-between transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50'>
                <div className='space-y-5'>
                  <div className='mb-3 flex items-center justify-between mb-2'>
                    <span>
                      <img src={reactIcon} alt="" />
                    </span>
                    <span className='rounded-full bg-blue-50 px-[12px] py-[4px] text-[11px] text-blue-500 font-semibold'>
                      Popular
                    </span>
                  </div>

                  <h3 className='text-lg font-bold text-gray-900'>
                    React.js
                  </h3>

                  <p className=" text-[12px] text-gray-500 mb-6">
                    A declarative, component-based JavaScript library for building
                    modern user interfaces.
                  </p>
                </div>

                <div className='space-y-5'>
                  <div className='flex items-center justify-between'>
                    <span className="rounded-full bg-gray-100 px-2 py-[2px] text-[11px]">
                      Frontend
                    </span>

                    <span className="text-[11px]">
                      Beginner-Friendly
                    </span>

                    <span className='text-[11px] flex items-center gap-1'><span className=' text-amber-300'><FaStar /></span>
                      4.9</span>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-gray-950 py-2 text-[12px] text-white transition hover:bg-brand cursor-pointer">
                    Add to Stack
                  </button>
                </div>
              </div>

              <div className=' rounded-2xl border border-gray-200 p-5 flex flex-col justify-between transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50'>
                <div className='space-y-5'>
                  <div className='mb-3 flex items-center justify-between mb-2'>
                    <span>
                      <img src={reactIcon} alt="" />
                    </span>
                    <span className='rounded-full bg-blue-50 px-[12px] py-[4px] text-[11px] text-blue-500 font-semibold'>
                      Popular
                    </span>
                  </div>

                  <h3 className='text-lg font-bold text-gray-900'>
                    React.js
                  </h3>

                  <p className=" text-[12px] text-gray-500 mb-6">
                    A declarative, component-based JavaScript library for building
                    modern user interfaces.
                  </p>
                </div>

                <div className='space-y-5'>
                  <div className='flex items-center justify-between'>
                    <span className="rounded-full bg-gray-100 px-2 py-[2px] text-[11px]">
                      Frontend
                    </span>

                    <span className="text-[11px]">
                      Beginner-Friendly
                    </span>

                    <span className='text-[11px] flex items-center gap-1'><span className=' text-amber-300'><FaStar /></span>
                      4.9</span>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-gray-950 py-2 text-[12px] text-white transition hover:bg-brand cursor-pointer">
                    Add to Stack
                  </button>
                </div>
              </div>

              <div className=' rounded-2xl border border-gray-200 p-5 flex flex-col justify-between transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50'>
                <div className='space-y-5'>
                  <div className='mb-3 flex items-center justify-between mb-2'>
                    <span>
                      <img src={reactIcon} alt="" />
                    </span>
                    <span className='rounded-full bg-blue-50 px-[12px] py-[4px] text-[11px] text-blue-500 font-semibold'>
                      Popular
                    </span>
                  </div>

                  <h3 className='text-lg font-bold text-gray-900'>
                    React.js
                  </h3>

                  <p className=" text-[12px] text-gray-500 mb-6">
                    A declarative, component-based JavaScript library for building
                    modern user interfaces.
                  </p>
                </div>

                <div className='space-y-5'>
                  <div className='flex items-center justify-between'>
                    <span className="rounded-full bg-gray-100 px-2 py-[2px] text-[11px]">
                      Frontend
                    </span>

                    <span className="text-[11px]">
                      Beginner-Friendly
                    </span>

                    <span className='text-[11px] flex items-center gap-1'><span className=' text-amber-300'><FaStar /></span>
                      4.9</span>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-gray-950 py-2 text-[12px] text-white transition hover:bg-brand cursor-pointer">
                    Add to Stack
                  </button>
                </div>
              </div>

              <div className=' rounded-2xl border border-gray-200 p-5 flex flex-col justify-between transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50'>
                <div className='space-y-5'>
                  <div className='mb-3 flex items-center justify-between mb-2'>
                    <span>
                      <img src={reactIcon} alt="" />
                    </span>
                    <span className='rounded-full bg-blue-50 px-[12px] py-[4px] text-[11px] text-blue-500 font-semibold'>
                      Popular
                    </span>
                  </div>

                  <h3 className='text-lg font-bold text-gray-900'>
                    React.js
                  </h3>

                  <p className=" text-[12px] text-gray-500 mb-6">
                    A declarative, component-based JavaScript library for building
                    modern user interfaces.
                  </p>
                </div>

                <div className='space-y-5'>
                  <div className='flex items-center justify-between'>
                    <span className="rounded-full bg-gray-100 px-2 py-[2px] text-[11px]">
                      Frontend
                    </span>

                    <span className="text-[11px]">
                      Beginner-Friendly
                    </span>

                    <span className='text-[11px] flex items-center gap-1'><span className=' text-amber-300'><FaStar /></span>
                      4.9</span>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-gray-950 py-2 text-[12px] text-white transition hover:bg-brand cursor-pointer">
                    Add to Stack
                  </button>
                </div>
              </div>

              <div className=' rounded-2xl border border-gray-200 p-5 flex flex-col justify-between transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50'>
                <div className='space-y-5'>
                  <div className='mb-3 flex items-center justify-between mb-2'>
                    <span>
                      <img src={reactIcon} alt="" />
                    </span>
                    <span className='rounded-full bg-blue-50 px-[12px] py-[4px] text-[11px] text-blue-500 font-semibold'>
                      Popular
                    </span>
                  </div>

                  <h3 className='text-lg font-bold text-gray-900'>
                    React.js
                  </h3>

                  <p className=" text-[12px] text-gray-500 mb-6">
                    A declarative, component-based JavaScript library for building
                    modern user interfaces.
                  </p>
                </div>

                <div className='space-y-5'>
                  <div className='flex items-center justify-between'>
                    <span className="rounded-full bg-gray-100 px-2 py-[2px] text-[11px]">
                      Frontend
                    </span>

                    <span className="text-[11px]">
                      Beginner-Friendly
                    </span>

                    <span className='text-[11px] flex items-center gap-1'><span className=' text-amber-300'><FaStar /></span>
                      4.9</span>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-gray-950 py-2 text-[12px] text-white transition hover:bg-brand cursor-pointer">
                    Add to Stack
                  </button>
                </div>
              </div>

              <div className=' rounded-2xl border border-gray-200 p-5 flex flex-col justify-between transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50'>
                <div className='space-y-5'>
                  <div className='mb-3 flex items-center justify-between mb-2'>
                    <span>
                      <img src={reactIcon} alt="" />
                    </span>
                    <span className='rounded-full bg-blue-50 px-[12px] py-[4px] text-[11px] text-blue-500 font-semibold'>
                      Popular
                    </span>
                  </div>

                  <h3 className='text-lg font-bold text-gray-900'>
                    React.js
                  </h3>

                  <p className=" text-[12px] text-gray-500 mb-6">
                    A declarative, component-based JavaScript library for building
                    modern user interfaces.
                  </p>
                </div>

                <div className='space-y-5'>
                  <div className='flex items-center justify-between'>
                    <span className="rounded-full bg-gray-100 px-2 py-[2px] text-[11px]">
                      Frontend
                    </span>

                    <span className="text-[11px]">
                      Beginner-Friendly
                    </span>

                    <span className='text-[11px] flex items-center gap-1'><span className=' text-amber-300'><FaStar /></span>
                      4.9</span>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-gray-950 py-2 text-[12px] text-white transition hover:bg-brand cursor-pointer">
                    Add to Stack
                  </button>
                </div>
              </div>

              <div className=' rounded-2xl border border-gray-200 p-5 flex flex-col justify-between transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50'>
                <div className='space-y-5'>
                  <div className='mb-3 flex items-center justify-between mb-2'>
                    <span>
                      <img src={reactIcon} alt="" />
                    </span>
                    <span className='rounded-full bg-blue-50 px-[12px] py-[4px] text-[11px] text-blue-500 font-semibold'>
                      Popular
                    </span>
                  </div>

                  <h3 className='text-lg font-bold text-gray-900'>
                    React.js
                  </h3>

                  <p className=" text-[12px] text-gray-500 mb-6">
                    A declarative, component-based JavaScript library for building
                    modern user interfaces.
                  </p>
                </div>

                <div className='space-y-5'>
                  <div className='flex items-center justify-between'>
                    <span className="rounded-full bg-gray-100 px-2 py-[2px] text-[11px]">
                      Frontend
                    </span>

                    <span className="text-[11px]">
                      Beginner-Friendly
                    </span>

                    <span className='text-[11px] flex items-center gap-1'><span className=' text-amber-300'><FaStar /></span>
                      4.9</span>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-gray-950 py-2 text-[12px] text-white transition hover:bg-brand cursor-pointer">
                    Add to Stack
                  </button>
                </div>
              </div>

              <div className=' rounded-2xl border border-gray-200 p-5 flex flex-col justify-between transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50'>
                <div className='space-y-5'>
                  <div className='mb-3 flex items-center justify-between mb-2'>
                    <span>
                      <img src={reactIcon} alt="" />
                    </span>
                    <span className='rounded-full bg-blue-50 px-[12px] py-[4px] text-[11px] text-blue-500 font-semibold'>
                      Popular
                    </span>
                  </div>

                  <h3 className='text-lg font-bold text-gray-900'>
                    React.js
                  </h3>

                  <p className=" text-[12px] text-gray-500 mb-6">
                    A declarative, component-based JavaScript library for building
                    modern user interfaces.
                  </p>
                </div>

                <div className='space-y-5'>
                  <div className='flex items-center justify-between'>
                    <span className="rounded-full bg-gray-100 px-2 py-[2px] text-[11px]">
                      Frontend
                    </span>

                    <span className="text-[11px]">
                      Beginner-Friendly
                    </span>

                    <span className='text-[11px] flex items-center gap-1'><span className=' text-amber-300'><FaStar /></span>
                      4.9</span>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-gray-950 py-2 text-[12px] text-white transition hover:bg-brand cursor-pointer">
                    Add to Stack
                  </button>
                </div>
              </div>



            </div>


            <aside className='h-fit rounded-2xl border border-gray-300 shadow-xs p-5'>

              <h3 className='text-base font-bold text-gray-900 mb-1'>
                Your Stack
              </h3>

              <p className="mb-4 text-[12px] text-gray-400">
                2 Technology Selected
              </p>


              <div className="space-y-2 mb-8">

                <div className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span><img src="/icon/Svelte.png" alt="" /></span>

                    <div>
                      <p className="text-[12px] font-bold">
                        Svelte
                      </p>

                      <p className="text-[8px] text-gray-400">
                        Frontend
                      </p>
                    </div>
                  </div>

                  <button className="text-gray-400 hover:text-red-500 transition-colors duration-300 cursor-pointer">
                    <RxCross2 />
                  </button>
                </div>

              </div>

              <button className="mt-4 w-full rounded-md border border-red-200 py-2 text-[14px] font-semibold text-red-500 hover:bg-red-50 cursor-pointer">
                Remove All
              </button>
            </aside>

          </div>


        </div>
      </section>

      <footer className='pt-10 pb-3 px-4 md:pt-24'>
        <div className='container mx-auto'>

          <div className='grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-5'>

            <div className='lg:col-span-2'>
              <img src={logo} alt="" />
              <p className="mt-4 max-w-md text-sm text-gray-500">
                Curated tools, technologies, and resources for developers building
                modern software.
              </p>

              <div className="mt-8 flex items-center gap-5 text-sm text-gray-700">
                <a href="#" className="hover:text-brand">
                  GitHub
                </a>

                <a href="#" className="hover:text-brand">
                  Twitter
                </a>

                <a href="#" className="hover:text-brand">
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase text-gray-900">
                Product
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-brand">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-brand">
                    Technologies
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-brand">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase text-gray-900">
                Company
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-brand">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-brand">
                    Contact
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-brand">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase text-gray-900">
                Legal
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-brand">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-brand">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

          </div>


          <div className="flex flex-col gap-4 border-t border-gray-200 py-7 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-brand">
                Privacy
              </a>

              <a href="#" className="hover:text-brand">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
