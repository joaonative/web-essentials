import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (
    <h2 className="font-noto font-black text-3xl text-black">{children}</h2>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
