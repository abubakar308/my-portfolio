import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="text-center py-20">
            <h1 className="text-4xl">404</h1>
            <h2 className="text-2xl">Not Found</h2>
            <button className="bg-red-100 p-3 rounded-2xl"><Link to='/'>Go to Home</Link></button>
        </div>
    );
};

export default NotFound;