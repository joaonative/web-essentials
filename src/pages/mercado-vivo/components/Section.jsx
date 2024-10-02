import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section className="flex flex-col px-8 gap-12 mt-8">
      <h2 className="text-4xl font-medium font-dm text-center">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
