import PropTypes from "prop-types";
import Title from "./Title";

const Section = ({ title, children, solid }) => {
  return (
    <section
      className={`flex flex-col px-4 md:px-8 xl:px-12 gap-6 py-4 ${
        solid && "bg-white"
      }`}
    >
      <Title>{title}</Title>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  solid: PropTypes.bool,
};

export default Section;
