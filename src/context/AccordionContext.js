import { createContext } from 'react';

const AccordionContext = createContext({
  expandedSections: [],
  changeSectionStatus: () => {},
  sideContentMap: {},
  addSideContentForSection: () => {},
});

export default AccordionContext;
