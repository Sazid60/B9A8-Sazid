
import Book from "../Components/Book";
import { useLoaderData } from "react-router-dom";
const BooksCards = () => {
    const booksData = useLoaderData();
    // console.log(booksData)
    return (
        <section className=" text-black">
            <h1 className="font-bold text-5xl text-center mb-5 mt-5">Books</h1>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        booksData.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>

            </div>
        </section>
    );
};

export default BooksCards;