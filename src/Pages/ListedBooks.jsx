import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import MarkedReadBooks from "../Components/MarkedReadBooks/MarkedReadBooks";
import Wishlist from "../Components/Wishlist/Wishlist";
import { getReadList } from "../Utilities/index2";
import { getWishlist } from "../Utilities";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [sortCriteria, setSortCriteria] = useState(null);
    const readList = getReadList();
    const wishList = getWishlist();

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSort = (criteria) => {
        setSortCriteria(criteria);
    };

    const sortBooks = (books) => {
        if (sortCriteria === 'pages') {
            return [...books].sort((a, b) => parseInt(a.totalPages) - parseInt(b.totalPages));
        } else if (sortCriteria === 'rating') {
            return [...books].sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
        } else if (sortCriteria === 'year') {
            return [...books].sort((a, b) => parseInt(a.yearOfPublishing) - parseInt(b.yearOfPublishing));
        } else {
            return books;
        }
    };
    const handleMouseLeave = () => {
        setIsOpen(false);
    };
    return (
        <div className="mt-9">
            <div className="w-full bg-[#0D0D0D0D] h-24 flex justify-center items-center rounded-xl">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>
            {/* Side Bar */}
            <div className="text-center">
                <div className="dropdown dropdown-hover" onMouseLeave={handleMouseLeave}>
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white mt-8" onClick={handleToggle}>Sort By <span> <IoIosArrowDown /></span></div>
                    <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ${isOpen ? 'block' : 'hidden'}`}>
                        <li><a onClick={() => handleSort('pages')}>Sort By Pages</a></li>
                        <li><a onClick={() => handleSort('rating')}>Sort By Rating</a></li>
                        <li><a onClick={() => handleSort('year')}>Sort By Year</a></li>
                    </ul>
                </div>
            </div>

            {/* Slider */}
            <div className="flex items-center mx-auto overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-black">
                <Link to={''}
                    onClick={() => setTabIndex(0)}
                    className={`flex cursor-pointer items-center  px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border-[#23BE0A] border border-b-0' : 'border-b border-b-[#23BE0A]'}`}>
                    <span>Read Books</span>
                </Link >
                <Link to={`wishlist`}
                    onClick={() => setTabIndex(1)}
                    className={`flex cursor-pointer items-center px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border-[#23BE0A] border  border-b-0' : 'border-b border-[#23BE0A]'}`}>
                    <span>Wishlist Books</span>
                </Link>
                <div className="border-b flex-grow p-[38px] border-[#23BE0A] mb-7">
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
