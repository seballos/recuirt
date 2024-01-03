import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <nav className="px-4 h-16 text-3xl font-bold bg-slate-300 leading-[4rem] flex items-center">
      {children}
    </nav>
  );
};
