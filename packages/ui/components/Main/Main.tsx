import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="m-8">{children}</main>;
};
