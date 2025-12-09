import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login({ onLogin }) {
const navigate = useNavigate();
const [form, setForm] = useState({ email: "", password: "" });


const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};


const handleLogin = (e) => {
e.preventDefault();
const users = JSON.parse(localStorage.getItem("users")) || [];


if (!form.email || !form.password) {
alert("Please fill all fields");
return;
}


if (users.length === 0) {
alert("Please signup first.");
return;
}


const user = users.find(u => u.email === form.email && u.password === form.password);
if (!user) {
alert("Incorrect email or password.");
return;
}


localStorage.setItem("loggedInUser", JSON.stringify(user));
onLogin(true);
alert("Login successful!");
navigate("/home"); 
};


return (
<div className="auth-card">
<h2>Login</h2>
<form onSubmit={handleLogin}>
<input name="email" placeholder="Email" onChange={handleChange} />
<input type="password" name="password" placeholder="Password" onChange={handleChange} />
<button type="submit">Login</button>
</form>
<p>Don't have an account? <Link to="/signup">Signup</Link></p>
</div>
);
}