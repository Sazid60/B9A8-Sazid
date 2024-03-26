import toast from "react-hot-toast"

export const getReadList = () => {
    let readListedBooks = []
    const storedReadListedBooks = localStorage.getItem('markedRead')
    if (storedReadListedBooks) {
        readListedBooks = JSON.parse(storedReadListedBooks)
    }
    return readListedBooks
}

export const saveReadList = (singleBook) => {
    let books = getReadList();
    const isExist = books.find(book => singleBook.bookId === book.bookId);
    if (isExist) {
        return toast.error('You Have Already Read')
    }

    books.push(singleBook)
    localStorage.setItem('markedRead', JSON.stringify(books))
    toast.success('Added To Read List')



}



