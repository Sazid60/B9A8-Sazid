import UseJsonData from "../Hooks/UseJsonData";
import Book from "../Components/Book";

const BooksCards = () => {
    const { booksData } = UseJsonData();
    // console.log(booksData )

    return (
        <section className=" text-black">
            <h1>Books</h1>
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