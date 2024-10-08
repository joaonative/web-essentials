import PropTypes from "prop-types";
import Title from "./Title";

const Section = ({ title, id, children, solid }) => {
  return (
    <section
      id={id}
      className={`flex flex-col px-4 md:px-8 xl:px-12 gap-6 py-4 mt-12 ${
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
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  solid: PropTypes.bool,
};

export default Section;
