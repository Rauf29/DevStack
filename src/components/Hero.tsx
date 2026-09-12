import bannerImg from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <section className='py-10 px-4 md:py-24'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-between gap-10 md:flex-row '>

                    <div className=' space-y-5 text-center md:text-left'>
                        <h1 className='text-4xl md:text-6xl font-extrabold text-gray-900'>
                            Build Your Ideal <br />
                            <span className='bg-gradient-to-r from-orange-500 via-brand to-violet-600 text-transparent bg-clip-text'>
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
    );
};

export default Hero;