import PropTypes from "prop-types";

const Title = ({ children, start }) => {
  return (
    <h2
      className={`text-2xl lg:text-4xl font-medium font-dm ${
        start ? "text-start" : "text-center"
      }`}
    >
      {children}
    </h2>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  start: PropTypes.bool,
};

export default Title;
