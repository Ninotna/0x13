import {
	loginStart,
	loginSuccess,
	loginFailure,
	profileLoaded
} from "../redux/slices/authSlice";

const API_URL = import.meta.env.VITE_API_URL;

export async function loginUser(store, email, password)
{
	store.dispatch(loginStart());

	try {
		console.log(password + " " + email);
		const response = await fetch(`${API_URL}/user/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password })
		
		});

		if (!response.ok) {
			const error = await response.json();
			console.log(response);
			throw new Error(error.message || "Erreur de connexion");
		}

		const data = await response.json();
		store.dispatch(loginSuccess(data.body)); /* { token } */
	}
	catch (error) {
		store.dispatch(loginFailure(error.message));
	}
}

export async function getUserProfile(store)
{
	const token = store.getState().auth.token;

	try {
		const response = await fetch(`${API_URL}/user/profile`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			}
		});

		const data = await response.json();
		store.dispatch(profileLoaded(data.body)); /* { firstName, lastName, email } */
	}
	catch (error) {
		console.error("Erreur profil:", error.message);
	}
}

export async function updateUserProfileRequest(token, firstName, lastName)
{
	const response = await fetch(`${API_URL}/user/profile`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({ firstName, lastName })
	});

	if (!response.ok)
	{
		const error = await response.json();
		throw new Error(error.message || "Erreur lors de la mise à jour");
	}

	const data = await response.json();
	return data.body;
}
