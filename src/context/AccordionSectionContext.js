import { createContext } from 'react';

const AccordionSectionContext = createContext({
  uuid: undefined,
  isExpanded: false,
});

export default AccordionSectionContext;
