import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
    return (
        <div className="hover:">
           <header>
             {/* Navbar section */}
            <Navbar />
           </header>
        {/* main section */}
           <main>
            <div>
             <Outlet />
           </div>
           </main>
           
           {/* footer section */}
           <footer>
        <Footer />
           </footer>
            
        </div>
    );
};

export default Mainlayout;