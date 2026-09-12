import { FaStar } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import reactIcon from '../../public/icon/react.png';

const CardSection = () => {
    return (
        <section className='px-4 pb-10 md:pb-24 border-b border-gray-200'>
            <div className='container mx-auto'>

                <div className='mb-8'>
                    <h2 className=' text-4xl font-extrabold text-gran-900'>
                        Explore the {' '}<span className='bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent'>          Technologies
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
    );
};

export default CardSection;