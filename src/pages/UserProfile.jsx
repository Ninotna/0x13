import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserProfile, getUserProfile, logout } from '../redux/slices/authSlice';
import Header from '../components/Header';
// import Account from '../components/account/Account';
import '../styles/main.css';

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  const user = auth.user;

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    firstName: '',
    lastName: ''
  });

  useEffect(() => {
    if (!auth.token) {
      // navigate("/login");
      navigate('/');
    } else if (!user) {
      dispatch(getUserProfile());
    }
  }, [auth.token, user, navigate, dispatch]);

  useEffect(() => {
    if (user) {
      setEditedProfile({
        firstName: user.firstName,
        lastName: user.lastName
      });
    }
  }, [user]);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(
      updateUserProfile({
        firstName: editedProfile.firstName,
        lastName: editedProfile.lastName
      })
    );
    setIsEditing(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            {!isEditing && (
              <>
                <br />
                {user?.firstName} {user?.lastName}!
              </>
            )}
          </h1>
          {!isEditing && (
            <button className="edit-button" onClick={handleEditToggle}>
              Edit Name
            </button>
          )}
        </div>
        {isEditing && (
          <div className="edit-form">
            <div className="input-row">
              <input
                className={`input-name ${isEditing ? 'editing' : ''}`}
                type="text"
                name="firstName"
                value={editedProfile.firstName}
                onChange={handleChange}
                placeholder="First name"
              />
              <input
                className={`input-name ${isEditing ? 'editing' : ''}`}
                type="text"
                name="lastName"
                value={editedProfile.lastName}
                onChange={handleChange}
                placeholder="Last name"
              />
            </div>
            <div className="edit-buttons">
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
              <button className="cancel-button" onClick={handleEditToggle}>
                Cancel
              </button>
            </div>
          </div>
        )}

        <h2 className="sr-only">Accounts</h2>
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
