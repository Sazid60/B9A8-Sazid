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


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children :[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead/>,
      },
      {
        path: "/book-details",
        element: <BookDetails/>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
