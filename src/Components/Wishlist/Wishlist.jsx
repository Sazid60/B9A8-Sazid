import { CiLocationOn } from "react-icons/ci";
import { GoBook, GoPeople } from "react-icons/go";


const Wishlist = () => {
    return (
        <div className="w-full mx-auto group hover:no-underline focus:no-underline border-2 p-2 lg:p-6 hover:scale-105 rounded-lg flex flex-col lg:flex-row gap-4 hover:shadow-2xl ">
        <div className="flex justify-center items-center rounded-xl w-[400px]">
            <img role="presentation" className="w-[200px] h-[300px] rounded bg-gray-500 shadow-2xl" src="" />
        </div>
        <div className="w-full">
            <h1 className="text-2xl text-center lg:text-left font-bold mb-4">Book Name</h1>
            <p className="text-sm lg:text-lg mb-5">By : Sazid </p>
            <div>
                <div className="flex items-center gap-4 mb-4 text-sm lg:text-lg">
                    Tag:
                    <div className="flex ">
                        <p className=" p-2 bg-[#23BE0A0D] border-0 text-[#23BE0A] rounded-xl">tag</p>
                        <p className="p-2 bg-[#23BE0A0D] border-0 text-[#23BE0A] rounded-xl">tag</p>
                    </div>
                    <p className="flex items-center gap-2"> <CiLocationOn /> <span>Year of Publishing: 1924</span></p>
                </div>
                <div className="flex items-center gap-4 lg:text-lg mb-4">
                    <p className="flex items-center gap-2"> <GoPeople /> <span>Publisher: Scribner</span></p>
                    <p className="flex items-center gap-2"> <GoBook /> <span>Page 192</span></p>
                </div> <hr className="border border-dashed border-gray-400 mb-4" />
                <div className="flex items-center lg:gap-4 lg:text-lg">
                    <p className="btn bg-[#328EFF26] text-[#328EFF] rounded-full">Category: Classic</p>
                    <p className=" btn bg-[#FFAC3326] text-[#FFAC33] rounded-full">Rating: 4.5</p>
                    <p className="btn text-white rounded-full bg-[#23BE0A]">View Details</p>
                </div>

            </div>
        </div>
    </div>
    );
};

export default Wishlist;