import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
    return (
        <div className="bg-indigo-300/30 min-h-screen">
           <header>
             {/* Navbar section */}
            <Navbar />
           </header>
        {/* main section */}
           <main className="flex-grow px-4 py-8">
             <Outlet />
           </main>
           
           {/* footer section */}
           <footer className="bg-white border-t border-gray-200 py-4">
        <Footer />
           </footer>
            
        </div>
    );
};

export default Mainlayout;