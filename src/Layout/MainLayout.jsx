import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
     <div>
           <div className="container mx-auto max-w-6xl mt-4">
            <NavBar />
            <Outlet />
            
        </div>
        <Footer />
     </div>
    );
};

export default MainLayout;