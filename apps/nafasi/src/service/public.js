import mem from "mem";
import axios from "axios";

const baseURL = "http://sebratech.recuirt.com:8000/api";

const axiosPublic = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const logout = () => localStorage.removeItem("session");

const login = async (params) => {
  try {
    const { data: session } = await axiosPublic.post("/token/", params);

    localStorage.setItem("session", JSON.stringify(session));

    return session;
  } catch {
    logout();

    return null;
  }
};

const refreshTokenUnauth = async () => {
  const session = JSON.parse(localStorage.getItem("session"));

  try {
    const { data } = await axiosPublic.post("/token/refresh/", {
      refresh: session?.refresh || "",
    });

    logout();

    localStorage.setItem(
      "session",
      JSON.stringify({ refresh: session?.refresh || "", access: data.access })
    );

    return data.access;
  } catch {
    logout();

    return "";
  }
};

const refreshToken = mem(refreshTokenUnauth, {
  maxAge: 10000,
});

export { refreshToken, login, baseURL };
