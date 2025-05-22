const API_URL = import.meta.env.VITE_API_URL;

/**
 * Appel API pour login
 */
export async function loginRequest(email, password)
{
	const response = await fetch(`${API_URL}/user/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ email, password })
	});

	if (!response.ok)
	{
		const error = await response.json();
		throw new Error(error.message || "Erreur de connexion");
	}

	const data = await response.json();
	return data.body; // { token }
}

/**
 * Appel API pour obtenir le profil utilisateur
 */
export async function getUserProfileRequest(token)
{
	const response = await fetch(`${API_URL}/user/profile`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		}
	});

	if (!response.ok)
	{
		const error = await response.json();
		throw new Error(error.message || "Erreur de récupération du profil");
	}

	const data = await response.json();
	return data.body;
}

/**
 * Appel API pour mettre à jour le profil utilisateur
 */
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
		throw new Error(error.message || "Erreur de mise à jour");
	}

	const data = await response.json();
	return data.body;
}
