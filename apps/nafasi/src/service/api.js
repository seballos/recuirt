import axios from "axios";

import { refreshToken, baseURL } from "./public";

const api = () => {
  const session = JSON.parse(localStorage.getItem("session"));

  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.access || ""}`,
    },
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const config = error?.config;

      if (error?.response?.status === 401 && !config?.sent) {
        config.sent = true;

        const accessToken = await refreshToken();

        if (accessToken) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`,
          };
        }

        return axios(config);
      }

      return Promise.reject(error);
    }
  );

  const getSkills = () => {
    return instance.get("/skills/");
  };

  return {
    getSkills,
  };
};

const restApiClient = api();

export default restApiClient;
