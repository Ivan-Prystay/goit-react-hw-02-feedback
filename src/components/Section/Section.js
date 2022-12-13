import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div>
      {title} {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
