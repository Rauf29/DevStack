import type { Dispatch, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import type { Technologie } from "../type/technologie";
interface TechnologieProps {
    stack: Technologie[];
    setStack: Dispatch<SetStateAction<Technologie[]>>;

}
const SideBar = ({ stack, setStack }: TechnologieProps) => {
    return (
        <aside className='h-fit rounded-2xl border border-gray-300 shadow-xs p-5'>

            <h3 className='text-base font-bold text-gray-900 mb-1'>
                Your Stack
            </h3>

            <p className="mb-4 text-[12px] text-gray-400">
                2 Technology Selected
            </p>


            <div className="space-y-2 mb-8">
                {stack.map((technologie: Technologie, ind: number) => {
                    return (
                        <div className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2">
                            <div className="flex items-center gap-2">
                                <span><img src={technologie.icon} alt="" /></span>

                                <div>
                                    <p className="text-[12px] font-bold">
                                        {technologie.name}
                                    </p>

                                    <p className="text-[8px] text-gray-400">
                                        {technologie.category}
                                    </p>
                                </div>
                            </div>

                            <button className="text-gray-400 hover:text-red-500 transition-colors duration-300 cursor-pointer">
                                <RxCross2 />
                            </button>
                        </div>
                    )
                })}


            </div>

            <button className="mt-4 w-full rounded-md border border-red-200 py-2 text-[14px] font-semibold text-red-500 hover:bg-red-50 cursor-pointer">
                Remove All
            </button>
        </aside>
    );
};

export default SideBar;