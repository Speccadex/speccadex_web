// Az API alap URL-je a .env fájlból jön (VITE_API_URL), lásd .env.example
const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(token) {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
}

// Egységes fetch az API-hoz: elküldi a tokent, ha van, és hibát dob, ha a válasz nem sikeres.
// Használat: const parts = await apiFetch("/parts");
export async function apiFetch(path, options = {}) {
  const token = getToken();

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API hiba: ${response.status} ${response.statusText}`);
  }

  return response.status === 204 ? null : response.json();
}
