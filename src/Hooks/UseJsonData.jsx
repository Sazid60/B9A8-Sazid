import { useEffect, useState } from "react";


const UseJsonData = () => {
    const [booksData, setBooksData] = useState([]);
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooksData(data))
    }, [])
    return {booksData}
};

export default UseJsonData;