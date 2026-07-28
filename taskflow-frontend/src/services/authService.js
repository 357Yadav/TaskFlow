import api from "../api/axiosConfig";

export const register = async (user) => {
  const response = await api.post("/auth/register", user);
  return response.data;
};

export const login = async (user) => {
  const response = await api.post("/auth/login", user);

  console.log(response.data);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};