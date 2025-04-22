import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";

function App()
{
	return (
		<BrowserRouter>
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<SignIn />} />
			<Route path="/profile" element={<UserProfile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
