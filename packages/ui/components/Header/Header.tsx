export const Header = ({ text }: { text: string }) => {
  return (
    <nav className="px-4 h-16 text-3xl font-bold bg-slate-300">{text}</nav>
  );
};
