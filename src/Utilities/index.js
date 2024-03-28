import toast from "react-hot-toast";
import { getReadList } from "./index2";


export const getWishlist = () => {
    let wishlistBooks = [];
    const storedWishlistBooks = localStorage.getItem('wishlist');
    if (storedWishlistBooks) {
        wishlistBooks = JSON.parse(storedWishlistBooks);
    }
    return wishlistBooks;
}

export const saveToWishlist = (singleBook) => {
    const readList = getReadList(); 
    const isAlreadyRead = readList.find(book => book.bookId === singleBook.bookId);
    if (isAlreadyRead) {
        toast.error('You Have Already Read', {
            duration: 4000,
            position: 'top-right',
        });
        return;
    }

    let wishlist = getWishlist();
    const isExist = wishlist.find(book => singleBook.bookId === book.bookId);
    if (isExist) {
        return toast.error('Book is already in wishlist', {
            duration: 4000,
            position: 'top-right',
        });
    }

    wishlist.push(singleBook);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    toast.success('Added To Wishlist', {
        duration: 4000,
        position: 'top-right',
    });
}

export const removeFromWishlist = (bookId) => {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(book => book.bookId !== bookId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}
