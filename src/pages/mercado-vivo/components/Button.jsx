import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button className="cursor-pointer flex items-center w-max px-8 py-3 rounded-lg text-lg font-work font-bold text-white bg-[#EC6E55] hover:bg-[#fa8770] transition-colors duration-300">
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
