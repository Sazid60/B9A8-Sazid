import { CiLocationOn } from "react-icons/ci";
import { GoBook } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";

const MarkedReadBooks = ({ readItem }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = readItem
    return (
        <div className="w-full mx-auto group hover:no-underline focus:no-underline border-2 p-2 lg:p-6 hover:scale-105 rounded-lg flex flex-col lg:flex-row gap-4 hover:shadow-2xl mb-4">
            <div className="flex justify-center rounded-xl lg:w-[400px]">
                <img role="presentation" className="w-[200px] h-[300px] rounded bg-gray-500 shadow-2xl" src={image} />
            </div>
            <div className="w-full">
                <h1 className="text-3xl text-left font-bold mb-4">{bookName}</h1>
                <p className="text-sm lg:text-lg mb-5 font-semibold">By : {author}</p>
                <div>
                    <div className="flex  gap-4 mb-4 text-sm lg:text-lg flex-col lg:flex-row ">
                        
                        <div className="flex items-center">
                        <span className="font-semibold mr-2">Tag</span>
                            {
                                tags ? tags.map(tag => <p key={tag} className="btn bg-[#23BE0A0D] border-0 text-[#23BE0A] rounded-xl">{tag}</p>) : ""
                            }
                        </div>
                        <p className="flex items-center gap-2"> <CiLocationOn /> <span>Year of Publishing: {yearOfPublishing}</span></p>
                    </div>
                    <div className="flex items-center gap-5 lg:text-lg mb-4">
                        <p className="flex items-center gap-2"> <GoPeople /> <span>Publisher : {publisher}</span></p>
                        <p className="flex items-center gap-2"> <GoBook /> <span>Page : {totalPages}</span></p>
                    </div> <hr className="border border-dashed border-gray-400 mb-4" />
                    <div className="flex items-center lg:gap-4 lg:text-lg">
                        <p className="btn bg-[#328EFF26] text-[#328EFF] rounded-full">Category: {category}</p>
                        <p className=" btn bg-[#FFAC3326] text-[#FFAC33] rounded-full">Rating: {rating}</p>
                        <Link to={`/book-details/${bookId}`} className="btn text-white rounded-full bg-[#23BE0A]">View Details</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MarkedReadBooks;