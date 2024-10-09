import PropTypes from "prop-types";

const Title = ({ children }) => {
  return <h2 className="font-noto font-bold text-4xl">{children}</h2>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
