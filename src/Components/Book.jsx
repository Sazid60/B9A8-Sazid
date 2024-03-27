import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";


// eslint-disable-next-line react/prop-types
const Book = ({ book }) => {
    // console.log(book)
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <Link to={`/book-details/${bookId}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 p-2 hover:scale-105 rounded-lg flex flex-col hover:shadow-2xl ">
            <div className="flex justify-center items-center mt-2 p-3 rounded-xl w-[280px] lg:w-[320px]">
                <img role="presentation" className="w-[140px] h-[200px] rounded bg-gray-500 shadow-2xl" src={image} />
            </div>
            <div className="p-3 space-y-2 flex-grow">
                <div className="flex items-center gap-2">
                    {
                        // eslint-disable-next-line react/prop-types
                        tags.map(tag => <p key={tag} className="btn bg-[#23BE0A0D] border-0 text-[#23BE0A] rounded-xl">{tag}</p>)
                    }
                </div>
                <div className="p-0">
                    <div className="h-[50px]">
                        <h3 className="text-2xl font-semibold mt-2">{bookName}</h3>
                    </div>
                    <div className="">
                        <p className="">By : <span className="font-semibold">{author}</span></p>
                    </div>
                </div>
            </div><hr className="border border-dashed border-gray-400" />
            <div className="flex justify-between px-6 py-2">
                <p className="font-semibold">{category}</p>
                <p className="flex justify-center items-center gap-2"><CiStar /> {rating}</p>
            </div>
        </Link>
    );
};

export default Book;