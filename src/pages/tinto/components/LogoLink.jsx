import { Link } from "react-router-dom";

const LogoLink = () => {
  return (
    <Link to={"/tinto"} className="font-noto font-black text-2xl">
      Tinto!
    </Link>
  );
};

export default LogoLink;
