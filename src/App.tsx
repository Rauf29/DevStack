import './App.css';
import logo from './assets/logo-text.png';

function App() {
  return (
    <>
      <nav className="container mx-auto">
        <div className='flex items-center justify-between py-4'>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <ul className='flex items-center gap-8 text-sm text-gray-600'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className='flex items-center gap-5'>
            <button className='tetst-gray-800 text-sm'>
              Sign In
            </button>
            <button className='rounded-full bg-brand px-4 py-2 text-sm text-white'>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
