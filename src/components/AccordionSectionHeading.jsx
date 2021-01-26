import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from '../context/AccordionContext';
import AccordionSectionContext from '../context/AccordionSectionContext';

/** Button to switch open/closed state of an accordion section. To be contained somewhere beneath an
 * AccordionSection component. */
function AccordionSectionHeading({ children, className }) {
  const { changeSectionStatus } = useContext(AccordionContext);
  const { uuid } = useContext(AccordionSectionContext);

  return (
    <button
      className={`accordion-section-heading ${className}`}
      type="button"
      onClick={() => changeSectionStatus(uuid)}
    >
      {children}
    </button>
  );
}

AccordionSectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

AccordionSectionHeading.defaultProps = {
  className: '',
};

export default AccordionSectionHeading;
