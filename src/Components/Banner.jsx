
const Banner = () => {
    return (
        <div className="hero bg-base-200 mt-6 lg:mt-8 mb-6 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="../../public/Banner_Img.png" className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-3xl lg:text-5xl font-bold max-w-[526px] mb-4 lg:mb-12 text-center lg:text-start">Books to freshen up your bookshelf</h1>
                    <div className="flex justify-center lg:justify-start">
                        <button className="btn bg-[#23BE0A] text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;