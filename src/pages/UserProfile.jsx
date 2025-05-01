import React, { useEffect, useState } from "react";
import "../styles/main.css";
import { logout } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfileRequest } from "../services/authService";

/**
 * Page de profil utilisateur ArgentBank
 * @component
 * @returns JSX.Element
 */
function UserProfile() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState({ firstName: "", lastName: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState({ firstName: "", lastName: "" });

    // Redirection si l'utilisateur n'est pas connecté
    useEffect(() => {
        if (!auth.user) {
            navigate("/");
        }
    }, [auth.user, navigate]);

    // Récupération des informations utilisateur
    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const profile = await getUserProfileRequest(auth.token);
                setUserProfile(profile);
                setEditedProfile(profile);
            } catch (error) {
                console.error("Erreur lors de la récupération du profil :", error);
            }
        }
        if (auth.token) {
            fetchUserProfile();
        }
    }, [auth.token]);

    // Gestion de la modification du profil
    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile({ ...editedProfile, [name]: value });
    };

    const handleSave = () => {
        // TODO: Implémenter la logique pour sauvegarder les modifications via une API
        setUserProfile(editedProfile);
        setIsEditing(false);
    };

    return (
        <>
            <body>
                <nav className="main-nav">
                    <a className="main-nav-logo" href="./index.html">
                        <img
                            alt="Argent Bank Logo"
                            className="main-nav-logo-image"
                            src="./img/argentBankLogo.png"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </a>
                    <div>
                        <span className="main-nav-item">
                            <i className="fa fa-user-circle"></i> {userProfile.firstName}
                        </span>
                        <button
                            onClick={() => {
                                dispatch(logout());
                                navigate("/");
                            }}
                            className="main-nav-item"
                        >
                            <i className="fa fa-sign-out"></i> Sign Out
                        </button>
                    </div>
                </nav>
                <main className="main bg-dark">
                    <div className="header">
                        <h1>
                            Welcome back
                            <br />
                            {userProfile.firstName} {userProfile.lastName}!
                        </h1>
                        {isEditing ? (
                            <div className="edit-form">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={editedProfile.firstName}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={editedProfile.lastName}
                                    onChange={handleInputChange}
                                />
                                <button onClick={handleSave} className="save-button">
                                    Save
                                </button>
                                <button onClick={handleEditToggle} className="cancel-button">
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <button onClick={handleEditToggle} className="edit-button">
                                Edit Name
                            </button>
                        )}
                    </div>
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
                    {/* Ajoutez d'autres sections similaires pour les autres comptes */}
                </main>
                <footer className="footer">
                    <p className="footer-text">Copyright 2020 Argent Bank</p>
                </footer>
            </body>
        </>
    );
}

export default UserProfile;