import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import AccordionSectionContext from '../context/AccordionSectionContext';
import useExpand from '../hooks/useExpand';
import useCollapse from '../hooks/useCollapse';

/** The text within an accordion section which is expanded/collapsed on trigger of a related
 * AccordionSectionHeading element. To be contained somewhere beneath an AccordionSection
 * component. */
function AccordionSectionTextContent({ children, className }) {
  const { isExpanded } = useContext(AccordionSectionContext);
  const [heightStyle, setHeightStyle] = useState(isExpanded ? null : '0px');

  // track content DOM element to read its scroll height
  const contentRef = useRef();
  const el = contentRef.current;

  // track any ongoing operations by uuid to avoid race condition
  const ongoingOp = useRef(null);

  // function to collapse the section from its open state
  const collapse = useCollapse(contentRef, ongoingOp, setHeightStyle);

  // function to expand the section from its collapsed state
  const expand = useExpand(contentRef, ongoingOp, setHeightStyle);

  // perform transition every time open status changes
  useEffect(() => {
    if (el) {
      if (!isExpanded) {
        collapse();
      } else {
        expand();
      }
    }
  }, [collapse, el, expand, isExpanded]);

  return (
    <div
      style={{ height: heightStyle }}
      ref={contentRef}
      className={`accordion-section-text-content ${className}`}
    >
      {children}
    </div>
  );
}

AccordionSectionTextContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

AccordionSectionTextContent.defaultProps = {
  className: '',
};

export default AccordionSectionTextContent;
