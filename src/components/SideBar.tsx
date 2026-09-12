import type { Dispatch, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import type { Technologie } from "../type/technologie";
interface TechnologieProps {
    stack: Technologie[];
    setStack: Dispatch<SetStateAction<Technologie[]>>;

}
const SideBar = ({ stack, setStack
}: TechnologieProps) => {

    const handleRemoveFromStack = (technologie: Technologie) => {
        const updatedStack = stack.filter((item) => item.name !== technologie.name);
        setStack(updatedStack);
    }

    return (
        <aside className='h-fit rounded-2xl border border-gray-300 shadow-xs p-5'>

            <h3 className='text-lg font-bold text-gray-900 mb-1'>
                Your Stack
            </h3>

            <p className="mb-4 text-[14px] text-gray-400">
                {stack.length === 0 ? "No technologies selected yet." : `${stack.length} Technology Selected`}
            </p>


            <div className="space-y-2 mb-8">
                {stack.length === 0 && (
                    <div className="flex items-center justify-center rounded-md border border-gray-200 px-3 py-4">
                        <p className="text-[14px] font-normal text-gray-600">
                            Your stack is empty
                        </p>

                    </div>
                )}
                {stack.map((technologie: Technologie, ind: number) => {
                    return (
                        <div key={ind} className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2">
                            <div className="flex items-center gap-3">
                                <span><img src={technologie.icon} alt="" /></span>

                                <div>
                                    <p className="text-[14px] font-bold">
                                        {technologie.name}
                                    </p>

                                    <p className="text-[10px] text-gray-400">
                                        {technologie.category}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleRemoveFromStack(technologie)}

                                className="text-gray-400 hover:text-red-500 transition-colors duration-300 cursor-pointer">
                                <RxCross2 />
                            </button>
                        </div>
                    )
                })}


            </div>

            <button
                onClick={() => setStack([])}
                className="mt-4 w-full rounded-md border border-red-200 py-2 text-[14px] font-semibold text-red-500 hover:bg-red-50 cursor-pointer">
                Remove All
            </button>
        </aside>
    );
};

export default SideBar;