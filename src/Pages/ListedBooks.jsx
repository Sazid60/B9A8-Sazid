import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import MarkedReadBooks from "../Components/MarkedReadBooks/MarkedReadBooks";
import Wishlist from "../Components/Wishlist/Wishlist";
import { getReadList } from "../Utilities/index2";
import { getWishList } from "../Utilities";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const readList = getReadList()
    const wishList = getWishList()
    return (
        <div className="mt-9">
            <div className="w-full bg-[#0D0D0D0D] h-24 flex justify-center items-center rounded-xl">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>
            {/* Side Bar */}
            <div className="text-center">
                <details className="dropdown">
                    <summary className="btn bg-[#23BE0A] text-white mt-8">Sort By <span> <IoIosArrowDown /></span> </summary>
                    <ul className="p-2 menu z-[1] flex justify-center items-center bg-base-100 rounded-box w-full border-2 mt-2">
                        <li><a>Sort By Pages</a></li>
                        <li><a>Sort By Rating</a></li>
                        <li><a>Sort By Category</a></li>
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
                    {
                        tabIndex === 0 ?
                            (readList.length !== 0 ?
                                readList.map(readItem => <MarkedReadBooks key={readItem.bookId} readItem={readItem} />)
                                :
                                <div className="flex justify-center items-center w-full h-full"><h1 className="text-5xl font bold">No Data Found !!</h1></div>
                                
                            )
                            :  (wishList.length !== 0 ?
                                wishList.map(wishItem => <Wishlist key={wishItem.bookId} wishItem={wishItem} />)
                                :
                                <div className="flex justify-center items-center w-full h-full"><h1 className="text-5xl font bold">No Data Found !!</h1></div>
                                
                            )
                    }

                </div>
            </div>
        </div>
    );
};

export default ListedBooks;