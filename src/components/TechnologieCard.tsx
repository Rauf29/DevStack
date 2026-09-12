import { type Dispatch, type SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";
import type { Technologie } from "../type/technologie";
interface TechnologieProps {
    technologie: Technologie;
    stack: Technologie[];
    setStack: Dispatch<SetStateAction<Technologie[]>>;
}

const TechnologieCard = ({ technologie, stack, setStack }: TechnologieProps) => {

    const isAddedToStack = stack.some((item) => item.name === technologie.name);
    const handleAddToStack = (technologie: Technologie
    ) => {
        setStack([...stack, technologie]);
        toast.success(`${technologie.name} is purchased successfully`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }


    return (

        <div className={`rounded-2xl border border-gray-200 p-5 flex flex-col justify-between transition-colors duration-300 hover:border-pink-400 hover:bg-pink-50 ${isAddedToStack ? 'bg-pink-50 border-pink-400' : ''}`}>
            <div className='space-y-5'>
                <div className='mb-3 flex items-center justify-between mb-2'>
                    <span>
                        <img src={technologie.icon} alt="" />
                    </span>
                    <span className='rounded-full bg-blue-50 px-[12px] py-[4px] text-[12px] text-blue-500 font-semibold'>
                        {technologie.badge}
                    </span>
                </div>

                <h3 className='text-xl mt-5 font-bold text-gray-900'>
                    {technologie.name}
                </h3>

                <p className=" text-[14px] text-gray-500 mb-6">
                    {technologie.description}
                </p>
            </div>

            <div className='space-y-5'>
                <div className='flex items-center justify-between'>
                    <span className="rounded-full bg-gray-100 px-2 py-[2px] text-[12px]">
                        {technologie.category}
                    </span>

                    <span className="text-[12px]">
                        {technologie.difficulty}
                    </span>

                    <span className='text-[12px] flex items-center gap-1'><span className=' text-amber-300'><FaStar /></span>
                        {technologie.rating}</span>
                </div>
                <button
                    onClick={() => handleAddToStack(technologie)}
                    disabled={isAddedToStack}
                    className={`mt-3 w-full rounded-md py-2 text-[14px] text-white transition hover:bg-brand ${isAddedToStack ? 'bg-brand cursor-not-allowed' : 'bg-gray-900 cursor-pointer'}`}>
                    {isAddedToStack === true ? "Selected" : "Add to Stack"}

                </button>
            </div>
        </div>
    );
};

export default TechnologieCard;