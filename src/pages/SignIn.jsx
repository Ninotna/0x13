import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, getUserProfile } from "../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";

import "../styles/main.css";
import logo from "../assets/img/argentBankLogo.png";

/**
 * Page de connexion ArgentBank
 * @component
 * @returns JSX.Element
 */
function SignIn()
{
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isAuthenticated, status, error } = useSelector((state) => state.auth);

	useEffect(() =>
	{
		if (isAuthenticated)
		{
			dispatch(getUserProfile());
			navigate("/profile");
		}
	}, [isAuthenticated, dispatch, navigate]);

	const handleSubmit = (e) =>
	{
		e.preventDefault();
		dispatch(loginUser({ email, password }));
	};

	return (
		<>
			<nav className="main-nav">
				<Link className="main-nav-logo" to="/">
					<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
					<h1 className="sr-only">Argent Bank</h1>
				</Link>
			</nav>

			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit}>
						<div className="input-wrapper">
							<label htmlFor="username">Username</label>
							<input
								type="text"
								id="username"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="input-remember">
							<input type="checkbox" id="remember-me" />
							<label htmlFor="remember-me">Remember me</label>
						</div>
						{status === "failed" && <p className="error">{error}</p>}
						<button className="sign-in-button" type="submit">
							Sign In
						</button>
					</form>
				</section>
			</main>

			<footer className="footer">
				<p className="footer-text">Copyright 2020 Argent Bank</p>
			</footer>
		</>
	);
}

export default SignIn;
