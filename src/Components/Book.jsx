import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";


const Book = ({ book }) => {
    console.log(book)
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <Link to={"/book-details"} className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 p-2 hover:scale-105 rounded-lg flex flex-col hover:shadow-2xl ">
            <div className="flex justify-center items-center mt-4 p-3 rounded-xl w-[320px]">
                <img role="presentation" className="w-[200px] h-[300px] rounded bg-gray-500 shadow-2xl" src={image} />
            </div>
            <div className="p-6 space-y-2 flex-grow">
                <div className="flex items-center gap-2">
                    {
                        // eslint-disable-next-line react/prop-types
                        tags.map(tag => <p key={tag} className="btn bg-[#23BE0A0D] border-0 text-[#23BE0A] rounded-xl">{tag}</p>)
                    }
                </div>
                <div className="">
                    <div className="h-24">
                        <h3 className="text-2xl font-semibold mt-4">{bookName}</h3>
                    </div>
                    <div className="">
                        <p className="">By : <span className="font-semibold">{publisher}</span></p>
                    </div>
                </div>
            </div><hr className="border border-dashed border-gray-400" />
            <div className="flex justify-between px-6 py-4 ">
                <p className="font-semibold">{category}</p>
                <p className="flex justify-center items-center gap-2"><CiStar /> {rating}</p>
            </div>
        </Link>
    );
};

export default Book;