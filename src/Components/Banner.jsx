
const Banner = () => {
    return (
        <div className="px-6 lg:px-0">
            <div className="bg-base-200 mt-6 lg:mt-8 mb-6 rounded-xl lg:p-8">
                <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
                    <img src="../../public/Banner_Img.png" className="max-w-xs rounded-lg m-2" />
                    <div className="">
                        <h1 className="text-3xl lg:text-5xl font-bold max-w-[300px] lg:max-w-[526px] mb-4 lg:mb-12 text-center lg:text-start">Books To Freshen Up Your Bookshelf</h1>
                        <div className="flex justify-center lg:justify-start">
                            <button className="btn bg-[#23BE0A] text-white">View The List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;