import React from "react";
import "../styles/main.css";

import logo from "../assets/img/argentBankLogo.png"
// import treeImage from "../assets/img/bank-tree.jpeg";
// import chatIcon from "../assets/img/icon-chat.png";
// import moneyIcon from "../assets/img/icon-money.png";
// import securityIcon from "../assets/img/icon-security.png";

/**
 * Page de connexion ArgentBank
 * @component
 * @returns JSX.Element
 */
function SignIn()
{
	return (
		<>
<body>
 <nav className="main-nav">
  <a className="main-nav-logo" href="./index.html">
   <img alt="Argent Bank Logo" className="main-nav-logo-image" src={logo}/>
   <h1 className="sr-only">
    Argent Bank
   </h1>
  </a>
  <div>
   <a className="main-nav-item" href="./sign-in.html">
    <i className="fa fa-user-circle">
    </i>
    Sign In
   </a>
  </div>
 </nav>
 <main className="main bg-dark">
  <section className="sign-in-content">
   <i className="fa fa-user-circle sign-in-icon">
   </i>
   <h1>
    Sign In
   </h1>
   <form>
    <div className="input-wrapper">
     <label for="username">
      Username
     </label>
     <input id="username" type="text"/>
    </div>
    <div className="input-wrapper">
     <label for="password">
      Password
     </label>
     <input id="password" type="password"/>
    </div>
    <div className="input-remember">
     <input id="remember-me" type="checkbox"/>
     <label for="remember-me">
      Remember me
     </label>
    </div>
    <!-- PLACEHOLDER DUE TO STATIC SITE -->
    <a className="sign-in-button" href="./user.html">
     Sign In
    </a>
    <!-- SHOULD BE THE BUTTON BELOW -->
    <!-- <button className="sign-in-button">Sign In</button> -->
    <!-- -->
   </form>
  </section>
 </main>
 <footer className="footer">
  <p className="footer-text">
   Copyright 2020 Argent Bank
  </p>
 </footer>
 <script>
 </script>
</body>

		</>
	);
}

export default SignIn;
