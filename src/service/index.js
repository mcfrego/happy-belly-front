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

export async function getFruitCount() {}

export async function createFruits() {}

export async function updateFruit() {}

export async function deleteFruit() {}
