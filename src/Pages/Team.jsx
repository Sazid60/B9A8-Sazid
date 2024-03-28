

const Team = () => {
    return (
        <section className="py-6 ">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
                <p className="max-w-2xl text-center ">Our team thrives on excellence, innovation, and collaboration. With diverse skills and a shared vision, we tackle challenges creatively and celebrate successes together.</p>
                <div className="flex flex-row flex-wrap-reverse justify-center">
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full " src="./lisa.jpg" />
                        <p className="text-xl font-semibold leading-tight">Sadia Lisa</p>
                        <p className="">Sr. Story Writer </p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full " src="./maria.jpg" />
                        <p className="text-xl font-semibold leading-tight">Maria Mim</p>
                        <p className="">Sr.Team Leed</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full " src="/nayeem.jpg" />
                        <p className="text-xl font-semibold leading-tight">Nayeem Rahman</p>
                        <p className="">Content Writer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full " src="./fahim.jpg" />
                        <p className="text-xl font-semibold leading-tight">Nafiur Fahim</p>
                        <p className="">Sr. Story Writer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full " src="./ayaat.jpg" />
                        <p className="text-xl font-semibold leading-tight">Ayaat Rahman</p>
                        <p className="">Jr. Story Writer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full " src="./sazid.png" />
                        <p className="text-xl font-semibold leading-tight">Shahnawaz Sazid</p>
                        <p className="">Owner</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;