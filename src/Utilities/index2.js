import toast from "react-hot-toast";
import { removeFromWishlist } from "./index";

export const getReadList = () => {
    let readListedBooks = [];
    const storedReadListedBooks = localStorage.getItem('markedRead');
    if (storedReadListedBooks) {
        readListedBooks = JSON.parse(storedReadListedBooks);
    }
    return readListedBooks;
}

export const saveReadList = (singleBook) => {
    let books = getReadList();
    const isExist = books.find(book => singleBook.bookId === book.bookId);
    if (isExist) {
        return toast.error('You Have Already Read', {
            duration: 4000,
            position: 'top-right',
        });
    }

    removeFromWishlist(singleBook.bookId);

    books.push(singleBook);
    localStorage.setItem('markedRead', JSON.stringify(books));
    toast.success('Added To Read List', {
        duration: 4000,
        position: 'top-right',
    });

    const bookElement = document.getElementById(singleBook.bookId);
    if (bookElement) {
        bookElement.remove();
    }
}
