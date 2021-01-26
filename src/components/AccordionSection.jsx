import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import AccordionContext from '../context/AccordionContext';
import AccordionSectionContext from '../context/AccordionSectionContext';

/** Container for the content of one accordion section. Passes in an AccordionSectionContext the
 * unique ID of this section and information whether the section is currently regarded as 'open'
 * or 'closed'. Components which may consume this context are AccordionSectionHeading and
 * AccordionSectionTextContent components. To be contained somewhere beneath the main Accordion
 * component */
function AccordionSection({ children, className, initiallyExpanded }) {
  // generate a unique uuid for this section which is reused on every render
  const uuidRef = useRef(uuidv4());
  const uuid = uuidRef.current;

  // check if section is considered open (passed in item context)
  const firstRenderRef = useRef(true);
  const { expandedSections, changeSectionStatus } = useContext(AccordionContext);
  // second condition here allows initial render of open section without transition effects
  const isExpanded =
    expandedSections.includes(uuid) || (firstRenderRef.current && initiallyExpanded);

  // after first render: mark section as open if necessary
  useEffect(() => {
    if (initiallyExpanded) {
      changeSectionStatus(uuid);
    }
    firstRenderRef.current = false;
  }, []);

  return (
    <AccordionSectionContext.Provider value={{ isExpanded, uuid }}>
      <div className={`accordion-section ${className}`}>{children}</div>
    </AccordionSectionContext.Provider>
  );
}

AccordionSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  initiallyExpanded: PropTypes.bool,
};

AccordionSection.defaultProps = {
  className: '',
  initiallyExpanded: false,
};

export default AccordionSection;
