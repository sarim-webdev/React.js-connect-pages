import { Link } from "react-router-dom";
export default function Navbar() {
return (
<nav className="bg-gray-300 p-3 flex gap-4">
<Link to="/home">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
</nav>
);
}