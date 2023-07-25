import { useEffect } from "react";

import PositionForm from "./components/PositionForm";
import useGetSkills from "./hooks/useGetSkills";

function App() {
  const { getSkills } = useGetSkills();

  useEffect(() => {
    void getSkills();
  }, []);

  return (
    <>
      <PositionForm />
    </>
  );
}

export default App;
