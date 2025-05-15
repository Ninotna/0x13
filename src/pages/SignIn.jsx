import React, { useState } from "react";
import { useStore, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import Header from "../components/Header";

function SignIn()
{
	const store = useStore();
	const navigate = useNavigate();

	const error = useSelector((state) => state.auth.error);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [remember, setRemember] = useState(false);

	const handleSubmit = async (e) =>
	{
		e.preventDefault();
		await loginUser(store, email, password);

		const auth = store.getState().auth;
		if (auth.isAuthenticated) {
			navigate("/profile");
		}
	};

	return (
		<>
			<Header />
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
							<input
								type="checkbox"
								id="remember-me"
								checked={remember}
								onChange={() => setRemember(!remember)}
							/>
							<label htmlFor="remember-me">Remember me</label>
						</div>
						{error && (
							<div style={{ color: "red", marginTop: "1rem" }}>
								{error}
							</div>
						)}
						<button type="submit" className="sign-in-button">
							Sign In
						</button>
					</form>
				</section>
			</main>
		</>
	);
}

export default SignIn;
