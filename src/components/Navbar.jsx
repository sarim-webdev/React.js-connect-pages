import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-brand">MySite</div>

      <div className="nav-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`nav-menu ${open ? "show" : ""}`}>
        <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </div>
  );
}
