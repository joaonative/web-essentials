import LogoLink from "./LogoLink";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-8 md:px-12 py-4 border-b-4 border-violet-500 bg-black text-slate-200">
      <LogoLink />
      <nav className="space-x-6 font-bold text-sm">
        <a href="#products">Vinhos</a>
        <a href="#discover">Descubra</a>
      </nav>
    </header>
  );
};

export default Header;
