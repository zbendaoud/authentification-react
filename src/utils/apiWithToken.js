import { QueryCache } from "@tanstack/react-query";
import * as auth from "../provider-auth";

async function fetchWithToken(
  endpoint,
  method,
  { data, headers: customHeaders, ...customConfig } = {}
) {
  try {
    const token = await auth.getToken();
    const config = {
      method: method,
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": data ? "application/json" : undefined,
        ...customHeaders,
      },
      ...customConfig,
    };
    const queryCache = new QueryCache();
    return window
      .fetch(`${import.meta.env.VITE_REACT_API_URL}/${endpoint}`, config)
      .then(async (response) => {
        if (response.status === 401) {
          queryCache.clear();
          await auth.logout();
          window.location.assign(window.location);
          return Promise.reject({ message: "Please re-authenticate." });
        }
        const data = await response.json();
        if (response.ok) {
          return data;
        } else {
          return Promise.reject(data);
        }
      });
  } catch (error) {
    console.error(error);
  }
}

async function GET(endpoint, options) {
  return fetchWithToken(endpoint, "GET", options);
}

async function POST(endpoint, options) {
  return fetchWithToken(endpoint, "POST", options);
}

async function PUT(endpoint, options) {
  return fetchWithToken(endpoint, "PUT", options);
}

async function DELETE(endpoint, options) {
  return fetchWithToken(endpoint, "DELETE", options);
}

// Ajoutez d'autres méthodes HTTP selon vos besoins

export { GET, POST, PUT, DELETE };
