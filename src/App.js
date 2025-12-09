import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function AppRoutes({ loggedIn, handleLoginStatusChange }) {
const location = useLocation();
const hideNavbar = location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup";


return (
<>
{!hideNavbar && loggedIn && <Navbar />}
<Routes>

<Route path="/" element={<Login onLogin={handleLoginStatusChange} />} />
<Route path="/login" element={<Login onLogin={handleLoginStatusChange} />} />
<Route path="/signup" element={<Signup onSignup={handleLoginStatusChange} />} />


<Route path="/home" element={loggedIn ? <Home /> : <Navigate to="/" />} />
<Route path="/about" element={loggedIn ? <About /> : <Navigate to="/" />} />
<Route path="/contact" element={loggedIn ? <Contact /> : <Navigate to="/" />} />
</Routes>
</>
);
}


export default function App() {
const [loggedIn, setLoggedIn] = useState(false);


useEffect(() => {
const user = JSON.parse(localStorage.getItem("loggedInUser"));
setLoggedIn(!!user);
}, []);


const handleLoginStatusChange = (status) => {
setLoggedIn(status);
};


return (
<BrowserRouter>
<AppRoutes loggedIn={loggedIn} handleLoginStatusChange={handleLoginStatusChange} />
</BrowserRouter>
);
}