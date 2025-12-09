import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Signup({ onSignup }) {
const navigate = useNavigate();
const [form, setForm] = useState({ name: "", email: "", password: "" });


const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};


const handleSignup = (e) => {
e.preventDefault();
const users = JSON.parse(localStorage.getItem("users")) || [];


if (!form.name || !form.email || !form.password) {
alert("Please fill all fields");
return;
}


const existing = users.find(u => u.email === form.email);
if (existing) {
alert("User already exists, please login.");
navigate("/login");
return;
}


users.push(form);
localStorage.setItem("users", JSON.stringify(users));
alert("Signup successful!");
onSignup(true);
navigate("/login");
};


return (
<div className="auth-card">
<h2>Signup</h2>
<form onSubmit={handleSignup}>
<input name="name" placeholder="Name" onChange={handleChange} />
<input name="email" placeholder="Email" onChange={handleChange} />
<input type="password" name="password" placeholder="Password" onChange={handleChange} />
<button type="submit">Signup</button>
</form>
<p>Already have an account? <Link to="/login">Login</Link></p>
</div>
);
}