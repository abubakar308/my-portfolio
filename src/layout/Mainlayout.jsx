import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
           <header>
             {/* Navbar section */}
            <Navbar />
           </header>
        {/* main section */}
           <main className="flex-grow container mx-auto px-4 py-8">
             <Outlet />
           </main>
           
           {/* footer section */}
           <footer className="bg-gray-900 text-gray-300">
        <Footer />
           </footer>
            
        </div>
    );
};

export default Mainlayout;