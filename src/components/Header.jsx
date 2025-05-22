import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import logo from '../assets/img/argentBankLogo.png';
import chatIcon from '../assets/img/icon-chat.png';
import moneyIcon from '../assets/img/icon-money.png';
import securityIcon from '../assets/img/icon-security.png';
import iconUser from '../assets/img/icon-user.svg';
import iconLogout from '../assets/img/icon-logout.svg';

function Header() {
  const auth = useSelector((state) => state.auth);
  const store = useStore();

  const handleLogout = () => {
    store.dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {auth.isAuthenticated && auth.user ? (
          <div className="main-nav-user">
            <Link className="main-nav-item" to="/profile">
              <i class="fa fa-user-circle"></i>
              {auth.user.firstName}
            </Link>
            <button className="main-nav-item logout-button" onClick={handleLogout}>
              <i class="fa fa-sign-out"></i>
              <span>Sign out</span>
            </button>
          </div>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
