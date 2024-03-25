
const Book = ({ book }) => {
    console.log(book)
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 p-2 hover:scale-105 rounded-lg ">
            <div className="flex justify-center items-center mt-4 p-3 rounded-xl">
            <img role="presentation" className="w-[200px] h-[300px] rounded bg-gray-500 shadow-2xl" src={image} />
            </div>
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">{bookName}</h3>
                <span className="text-xs text-gray-400">January 21, 2021</span>
                <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
            </div>
        </a>
    );
};

export default Book;