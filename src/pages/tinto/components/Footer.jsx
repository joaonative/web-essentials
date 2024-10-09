import LogoLink from "./LogoLink";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 px-12 py-4 font-bold text-sm bg-black text-slate-200">
      <div className="flex justify-between">
        <LogoLink />
        <nav className="flex flex-col items-start gap-2">
          <a href="#">Vinhos</a>
          <a href="#">Presenteie</a>
          <a href="#">Descubra</a>
          <a href="https://github.com/joaonative/" target="_blank">
            GitHub
          </a>
          <a href="https://github.com/joaonative" target="_blank">
            Author
          </a>
        </nav>
      </div>
      <p>Copyright © Tinto 2024. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
