import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL || "https://happy-belly-back.herokuapp.com/api",
});

export async function alive() {
  const { data } = await api.get("/");
  return data;
}

export async function login({ email, password }) {
  const body = { email, password };

  const { data } = await api.post("/auth/login", body);
  if (data.token) localStorage.setItem("token", data.token);
  return data;
}

export async function getFruits() {
  const { data } = await api.get("/fruit/");
  return data;
}

export async function getFruitCount() {
  const token = localStorage.getItem("token");

  const { data } = await api.get("/fruit/me", { headers: { token } });
  return data;
}

export async function createFruits({ name, size, count }) {
  const token = localStorage.getItem("token");

  const body = { fruits: [] };
  for (let i = 0; i < count; i++) {
    body.fruits.push({ name, size });
  }

  const { data } = await api.post("/fruit/me", body, { headers: { token } });
  return data;
}

export async function updateFruit({ id, body, status }) {
  const token = localStorage.getItem("token");

  if (status === "eat")
    body = {
      eatenStatus: true,
      eatenDate: new Date(),
    };

  const { data } = await api.put(`/fruit/me/${id}`, body, {
    headers: { token },
  });
  return data;
}

export async function deleteFruit({ id }) {
  const token = localStorage.getItem("token");

  const { data } = await api.put(`/fruit/me/${id}`, {
    headers: { token },
  });
  return data;
}
