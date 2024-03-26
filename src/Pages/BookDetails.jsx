import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const [singleBook, setSingleBook] = useState({})
    const books = useLoaderData()
    const { bookId } = useParams()
    // console.log(bookId)
    // console.log(books)

    useEffect(() => {
        if (books && bookId) {
            const singleBookObj = books.find(book => book.bookId === +bookId);
            setSingleBook(singleBookObj)
        }
    }, [books, bookId])

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;

    console.log(tags)
    
    return (
        <div className="mt-14">
            <div className="flex flex-col lg:flex-row lg:gap-12">
                <div className=" w-full lg:w-[573px] lg:h-[711px] border-2 bg-slate-50 flex justify-center p-7 rounded-xl">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className="p-8">
                    <h1 className="text-2xl lg:text-5xl font-bold mb-6">{bookName}</h1>
                    <p className="">By : <span className="font-semibold ">{author}</span></p>
                    <hr className="border border-dashed border-gray-400 mt-6" />
                    <p className="font-semibold lg:text-xl mt-6">{category}</p>
                    <hr className="border border-dashed border-gray-400 mt-6" />
                    <p className="py-6"><span className="font-bold">Review :</span> {review}</p>

                    <div className="flex items-center gap-2">
                        <p className="font-bold">Tags:{
                            tags ? tags.map(tag => <p key={tag} className="btn bg-[#23BE0A0D] border-0 text-[#23BE0A] rounded-xl">{tag}</p>) : ""
                        }</p>
                   
                    </div> <hr className="border border-dashed border-gray-400 mt-6" />

                    <div className="mt-6 mb-6 flex lg:gap-10">
                        <div className="flex flex-col gap-2 lg:gap-4 flex-grow">
                            <p className="text-xs lg:text-lg">Number of Pages</p>
                            <p className="text-xs lg:text-lg">Publisher</p>
                            <p className="text-xs lg:text-lg">Published Date</p>
                            <p className="text-xs lg:text-lg">Rating</p>
                        </div>
                        <div className="flex flex-col gap-2 lg:gap-4 flex-grow">
                            <p className="text-xs lg:text-lg font-bold"> : <span className="ml-4">{totalPages}</span></p>
                            <p className="text-xs lg:text-lg font-bold"> : <span className="ml-4">{publisher}</span></p>
                            <p className="text-xs lg:text-lg font-bold"> : <span className="ml-4">{yearOfPublishing}</span></p>
                            <p className="text-xs lg:text-lg font-bold"> : <span className="ml-4">{rating}</span></p>
                        </div>
                    </div>
                    <div className="flex gap-2 ">
                        <a className="btn bg-[#23BE0A] text-white">Read</a>
                        <a className="btn bg-[#59C6D2] text-white">Wishlist</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;