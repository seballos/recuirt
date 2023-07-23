import { useState } from "react";

import restApiClient from "../service/api";

const useGetSkills = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [skills, setSkills] = useState([]);

  const getSkills = async () => {
    try {
      setIsLoading(true);

      const { data } = await restApiClient.getSkills();

      setSkills(data);
    } catch {
      setSkills([]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    skills,
    getSkills,
    isLoading,
  };
};

export default useGetSkills;
