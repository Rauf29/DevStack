import { use, useState } from 'react';
import type { Technologie } from '../type/technologie';
import SideBar from './SideBar';
import TechnologieCard from './TechnologieCard';

interface TechnologieProps {
    technologiesPromise: Promise<Technologie[]>;
}
const CardSection = ({ technologiesPromise }: TechnologieProps) => {
    const technologies = use(technologiesPromise);
    const [stack, setStack] = useState<Technologie[]>([]);



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

                        {technologies.map((technologie: Technologie, ind: number) => {
                            return (
                                <TechnologieCard
                                    key={ind}
                                    technologie={technologie}
                                    stack={stack}
                                    setStack={setStack}
                                />
                            )
                        })}

                    </div>


                    <SideBar
                        stack={stack}
                        setStack={setStack}
                    />

                </div>


            </div>
        </section>
    );
};

export default CardSection;