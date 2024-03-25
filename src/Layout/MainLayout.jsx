import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";


const MainLayout = () => {
    return (
        <div>
            <div className="container mx-auto max-w-6xl mt-4">
                <div className="h-16">
                    <NavBar></NavBar>
                </div>
                <Outlet />

            </div>
        </div>
    );
};

export default MainLayout;