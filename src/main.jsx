import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import ListedBooks from './Pages/ListedBooks.jsx';
import PagesToRead from './Pages/PagesToRead.jsx';
import BookDetails from './Pages/BookDetails.jsx';
import MarkedReadBooks from './Components/MarkedReadBooks/MarkedReadBooks.jsx';
import Wishlist from './Components/Wishlist/Wishlist.jsx';
import Contact from './Pages/Contact.jsx';
import Team from './Pages/Team.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement : <ErrorPage />,
    children :[
      {
        path: "/",
        element: <Home/>,
        loader : ()=> fetch('/books.json'),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        children : [
          {
            index: true,
            element: <MarkedReadBooks />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          }
        ]
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead/>,
      },
      {
        path: "/book-details/:bookId",
        element: <BookDetails/>,
        loader : ()=> fetch('/books.json'),
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/team",
        element: <Team/>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
