import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
    return (
        <div className="">
            <Navbar />
           <div>
             <Outlet />
           </div>
            <Footer />
        </div>
    );
};

export default Mainlayout;