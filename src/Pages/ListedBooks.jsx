import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import MarkedReadBooks from "../Components/MarkedReadBooks/MarkedReadBooks";
import Wishlist from "../Components/Wishlist/Wishlist";
import { getReadList } from "../Utilities/index2";
import { getWishList } from "../Utilities";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [sortCriteria, setSortCriteria] = useState(null);
    const readList = getReadList();
    const wishList = getWishList();

    // Function to handle sorting criteria change
    const handleSort = (criteria) => {
        setSortCriteria(criteria);
    };

    // Function to sort books based on selected criteria
    const sortBooks = (books) => {
        if (sortCriteria === 'pages') {
            return [...books].sort((a, b) => Number(a.totalPages) - Number(b.totalPages));
        } else if (sortCriteria === 'rating') {
            return [...books].sort((a, b) => Number(a.rating) - Number(b.rating));
        } else if (sortCriteria === 'year') {
            return [...books].sort((a, b) => Number(a.yearOfPublishing) - Number(b.yearOfPublishing));
        } else {
            return books;
        }
    };

    return (
        <div className="mt-9">
            <div className="w-full bg-[#0D0D0D0D] h-24 flex justify-center items-center rounded-xl">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>
            {/* Side Bar */}
            <div className="text-center ">
                <details className="dropdown">
                    <summary className="btn bg-[#23BE0A] text-white mt-8">Sort By <span> <IoIosArrowDown /></span> </summary>
                    <ul className="p-2 menu flex justify-center items-center bg-base-100 rounded-box border-2 mt-2">
                        <li><a onClick={() => handleSort('pages')}>Sort By Pages</a></li>
                        <li><a onClick={() => handleSort('rating')}>Sort By Rating</a></li>
                        <li><a onClick={() => handleSort('year')}>Sort By Year</a></li>
                    </ul>
                </details>
            </div>

            {/* Slider */}
            <div className="flex items-center mx-auto overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-black">
                <Link to={''}
                    onClick={() => setTabIndex(0)}
                    className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border-black border border-b-0' : 'border-b border-black'}`}>
                    <span>Read Books</span>
                </Link >
                <Link to={`wishlist`}
                    onClick={() => setTabIndex(1)}
                    className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border-black border  border-b-0' : 'border-b border-black'}`}>
                    <span>Wishlist Books</span>
                </Link>
                <div className="border-b flex-grow p-[38px] border-black mb-7">
                    <a>

                    </a >
                </div>
            </div>
            <div className="mt-8">
                <div>
                    {tabIndex === 0 ? (
                        <div>
                            {sortBooks(readList).length !== 0 ? (
                                sortBooks(readList).map(readItem => (
                                    <MarkedReadBooks key={readItem.bookId} readItem={readItem} />
                                ))
                            ) : (
                                <div className="flex justify-center items-center w-full h-full">
                                    <h1 className="text-5xl font-bold">No Data Found !!</h1>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            {sortBooks(wishList).length !== 0 ? (
                                sortBooks(wishList).map(wishItem => (
                                    <Wishlist key={wishItem.bookId} wishItem={wishItem} />
                                ))
                            ) : (
                                <div className="flex justify-center items-center w-full h-full">
                                    <h1 className="text-5xl font-bold">No Data Found !!</h1>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
