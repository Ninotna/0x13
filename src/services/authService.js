const API_URL = import.meta.env.VITE_API_URL;

/**
 * Appelle l’API pour se connecter
 * @param {string} email
 * @param {string} password
 * @returns {{ token: string }}
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
 * Appelle l’API pour récupérer le profil utilisateur
 * @param {string} token
 * @returns {{ firstName: string, lastName: string, email: string }}
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

