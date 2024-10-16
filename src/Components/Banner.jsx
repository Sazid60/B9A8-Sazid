import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="px-6 lg:px-0">
            <div className="bg-base-200 mt-6 lg:mt-5 mb-6 rounded-xl lg:p-4">
                <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
                    <img src="./Banner_Img.png" className="max-w-xs rounded-lg m-2 w-[200px] lg:w-full h-[250px] lg:h-full" />
                    <div className="">
                        <h1 className="text-3xl lg:text-5xl font-bold max-w-[300px] lg:max-w-[526px] mb-4 lg:mb-12 text-center lg:text-start">Books To Freshen Up Your Bookshelf</h1>
                        <div className="flex justify-center lg:justify-start">
                            <Link to={"/listed-books"}> <button className="btn bg-[#23BE0A] text-white mb-4">View The List</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;