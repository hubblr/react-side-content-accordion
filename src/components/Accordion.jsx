import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from '../context/AccordionContext';
let persistentSideContentMap = {};

/** Outermost container of the accordion. Manages the state of sections which is shared through the
 * AccordionContext. Can contain (at any depth) AccordionSection and AccordionSideContentContainer
 * components. */
function Accordion({ children, className, allowMultipleExpanded, allowAllCollapsed }) {
  // control state of content: which sections are open & what site content is displayed
  const [expandedSections, setExpandedSections] = useState([]);
  const [sideContentMap, setSideContentMap] = useState(persistentSideContentMap);
  // update side content map for next render iteration
  persistentSideContentMap = { ...sideContentMap };

  // callbacks to open/close sections
  const addExpandedSection = useCallback(
    (uuid, clear = false) => {
      const newExpandedSections = clear ? [] : expandedSections.slice();
      newExpandedSections.push(uuid);
      setExpandedSections(newExpandedSections);
    },
    [expandedSections]
  );

  const removeExpandedSection = useCallback(
    (remUuid) => {
      setExpandedSections(expandedSections.filter((uuid) => uuid !== remUuid));
    },
    [expandedSections]
  );

  const changeSectionStatus = useCallback(
    (uuid) => {
      if (expandedSections.includes(uuid)) {
        if (allowAllCollapsed || expandedSections.length > 1) {
          removeExpandedSection(uuid);
        }
      } else {
        addExpandedSection(uuid, !allowMultipleExpanded);
      }
    },
    [
      addExpandedSection,
      allowAllCollapsed,
      allowMultipleExpanded,
      expandedSections,
      removeExpandedSection,
    ]
  );

  // callback to let AccordionSideContent fill children into AccordionSideContent container
  const addSideContentForSection = useCallback(
    (sideContent, uuid) => {
      // prevent dependency cycle
      if (sideContentMap[uuid] === sideContent) {
        return;
      }
      persistentSideContentMap[uuid] = sideContent;
      setSideContentMap(persistentSideContentMap);
    },
    [sideContentMap]
  );

  return (
    <AccordionContext.Provider
      value={{
        expandedSections,
        changeSectionStatus,
        sideContentMap,
        addSideContentForSection,
      }}
    >
      <div className={`accordion ${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  allowMultipleExpanded: PropTypes.bool,
  allowAllCollapsed: PropTypes.bool,
};

Accordion.defaultProps = {
  className: '',
  allowMultipleExpanded: false,
  allowAllCollapsed: false,
};

export default Accordion;
