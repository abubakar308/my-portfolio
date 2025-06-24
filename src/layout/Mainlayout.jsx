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
           <main className="flex-grow container mx-auto px-4 py-8">
             <Outlet />
           </main>
           
           {/* footer section */}
           <footer className="bg-white">
        <Footer />
           </footer>
            
        </div>
    );
};

export default Mainlayout;