import React, { useEffect, useState } from "react";
import "../styles/main.css";
import { useStore, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../services/authService";

import { useDispatch } from "react-redux";
import { updateUserProfile } from "../../redux/slices/authSlice";



function UserProfile()
{
	const store = useStore();
	const navigate = useNavigate();

	const auth = useSelector((state) => state.auth);
	const user = auth.user;

	const dispatch = useDispatch();

	const [isEditing, setIsEditing] = useState(false);
	const [editedProfile, setEditedProfile] = useState({
		firstName: "",
		lastName: ""
	});

	useEffect(() =>
	{
		if (!auth.token) {
			navigate("/sign-in");
		} else if (!user) {
	dispatch(getUserProfile());

		}
	}, [auth.token, user, navigate, store, dispatch]);

	useEffect(() =>
	{
		if (user) {
			setEditedProfile({
				firstName: user.firstName,
				lastName: user.lastName
			});
		}
	}, [user]);

	const handleEditToggle = () => setIsEditing(!isEditing);

	const handleChange = (e) =>
	{
		setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
	};

const handleSave = () =>
{
	dispatch(updateUserProfile({
		firstName: editedProfile.firstName,
		lastName: editedProfile.lastName
	}));
	setIsEditing(false);
};


	return (
		<>
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{user?.firstName} {user?.lastName}!
				</h1>
				<button className="edit-button" onClick={handleEditToggle}>
					Edit Name
				</button>
			</div>
			{isEditing && (
				<div className="edit-form">
					<input
						type="text"
						name="firstName"
						value={editedProfile.firstName}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="lastName"
						value={editedProfile.lastName}
						onChange={handleChange}
					/>
					<button onClick={handleSave}>Save</button>
				</div>
			)}
			 <h2 className="sr-only">Accounts</h2>
                    {/* Sections des comptes bancaires */}
                    <section className="account">
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                            <p className="account-amount">$2,082.79</p>
                            <p className="account-amount-description">Available Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
		</main>
		                <footer className="footer">
						<p className="footer-text">Copyright 2020 Argent Bank</p>
					</footer>
			</>
	);
}

export default UserProfile;
