import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { saveReadList } from "../Utilities/index2";
import { saveToWishlist } from "../Utilities";



const BookDetails = () => {
    const [singleBook, setSingleBook] = useState({})
    const [loading, setLoading] = useState(true)
    const books = useLoaderData()
    const { bookId } = useParams()


    const handleMarkedRead = (singleBook) => {
        saveReadList(singleBook)
    }

    const handleMarkedWish = () => {
        saveToWishlist(singleBook)
    }

    useEffect(() => {
        if (books && bookId) {
            setLoading(true);
            const singleBookObj = books.find(book => book.bookId === +bookId);
            setSingleBook(singleBookObj);
            setLoading(false)
        }
    }, [books, bookId])

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;

    if (loading) {
        return
    }
    // console.log(tags)

    return (
        <div className="mt-4">
            <div className="flex flex-col lg:flex-row lg:gap-12">
                <div className=" w-full lg:w-[573px] lg:h-[480px] border-2 bg-slate-50 flex justify-center p-7 rounded-xl">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className="p-4">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-2">{bookName}</h1>
                    <p className="">By : <span className="font-semibold ">{author}</span></p>
                    <hr className="border border-dashed border-gray-400 mt-2" />
                    <p className="font-semibold lg:text-lg mt-2">{category}</p>
                    <hr className="border border-dashed border-gray-400 mt-2" />
                    <p className="py-2"><span className="font-bold">Review :</span> {review}</p>

                    <div className="flex items-center gap-2">
                        <p className="font-bold">Tags: </p>
                        {
                            tags ? tags.map(tag => <p key={tag} className="btn bg-[#23BE0A0D] border-0 text-[#23BE0A] rounded-xl">{tag}</p>) : ""
                        }

                    </div> <hr className="border border-dashed border-gray-400 mt-2" />

                    <div className="mt-2 mb-2 flex lg:gap-10">
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
                        <button
                            onClick={() => handleMarkedRead(singleBook)}
                            className="btn bg-[#23BE0A] text-white"
                        >Read</button>
                        <button
                            onClick={() => handleMarkedWish(singleBook)}
                            className="btn bg-[#59C6D2] text-white"
                        >Wishlist</button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default BookDetails;