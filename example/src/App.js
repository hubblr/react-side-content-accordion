import React from 'react';
import cat1Img from './img/cat-694730_640.jpg';
import cat2Img from './img/cat-2934720_640.jpg';
import cat3Img from './img/kitty-2948404_640.jpg';

import {
  Accordion,
  AccordionSection,
  AccordionSectionHeading,
  AccordionSectionTextContent,
  AccordionSideContentContainer,
  AccordionSideContent,
} from 'react-side-content-accordion';
import 'react-side-content-accordion/dist/example.css';

const App = () => {
  return (
    <Accordion>
      <div className="accordion-sections">
        <AccordionSection initiallyExpanded>
          <AccordionSectionHeading>Section 1</AccordionSectionHeading>
          <AccordionSectionTextContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </AccordionSectionTextContent>
          <AccordionSideContent>
            <img src={cat1Img} alt="cat" />
          </AccordionSideContent>
        </AccordionSection>
        <AccordionSection>
          <AccordionSectionHeading>Section 2</AccordionSectionHeading>
          <AccordionSectionTextContent>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.
          </AccordionSectionTextContent>
          <AccordionSideContent>
            <img src={cat2Img} alt="cat" />
          </AccordionSideContent>
        </AccordionSection>
        <AccordionSection>
          <AccordionSectionHeading>Section 3</AccordionSectionHeading>
          <AccordionSectionTextContent>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet.
          </AccordionSectionTextContent>
          <AccordionSideContent>
            <img src={cat3Img} alt="cat" />
          </AccordionSideContent>
        </AccordionSection>
      </div>
      <AccordionSideContentContainer />
    </Accordion>
  );
};

export default App;
