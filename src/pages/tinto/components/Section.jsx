import PropTypes from "prop-types";
import Title from "./Title";

const Section = ({ children, title, start, solid, id }) => {
  return (
    <section
      id={id}
      className={`${
        solid && "bg-violet-500"
      } flex flex-col px-4 sm:px-8 md:px-12 gap-8`}
    >
      <div className={`${start ? "text-start" : "text-center"} text-white`}>
        {title && <Title>{title}</Title>}
      </div>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  start: PropTypes.bool,
  solid: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

export default Section;
