import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Navbar = () => {
    return (
        <nav className="navbar">
           <Link to ="/"><h1>Dojo Blog</h1></Link>
           <div className="Links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
           </div>
        </nav>
    );
}

export default Navbar;