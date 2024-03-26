
import toast from "react-hot-toast"
import { getReadList } from "./index2"



export const getWishList = () => {
    let wishListedBooks = []
    const storedWishListedBooks = localStorage.getItem('markedWish')
    if (storedWishListedBooks) {
        wishListedBooks = JSON.parse(storedWishListedBooks)
    }
    return wishListedBooks
}

export const saveWishList = (singleBook) => {

    // console.log(readClick)
    const readBooks = getReadList()

    // console.log("read Books : ", readBooks)



    let books = getWishList();
    const isExist = books.find(book => singleBook.bookId === book.bookId);
    const bookExists = readBooks.find(readBook => singleBook.bookId === readBook.bookId);

    if (isExist && !bookExists ) {
        return toast.error('Already Added To Wish List')
    }
    else if (bookExists) {
            return toast.error('You Have Already Read')
    }
    else {
        books.push(singleBook)
        localStorage.setItem('markedWish', JSON.stringify(books))
        if (!isExist && !bookExists) {
            toast.success('Added To wish List')
        }
    }

}



