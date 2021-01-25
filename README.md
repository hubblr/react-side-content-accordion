# react-side-content-accordion

> React accordion component which display side content depending on currently expanded sections.

[![NPM](https://img.shields.io/npm/v/react-side-content-accordion.svg)](https://www.npmjs.com/package/react-side-content-accordion) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-side-content-accordion
```

## Example

If you want to see the component in action, check out this [minimalistic example](https://hubblr.github.io/react-side-content-accordion/).

## Usage

```jsx
import React, { Component } from 'react'

import {
  Accordion,
  AccordionSection,
  AccordionSectionHeader,
  AccordionSectionTextContent,
  AccordionSideContentContainer,
  AccordionSideContent,
} from 'react-side-content-accordion';
import 'react-side-content-accordion/dist/example.css';

class Example extends Component {
  render() {
    return (
      <Accordion>
        <div className="accordion-sections">
          <AccordionSection initiallyOpen>
            <AccordionSectionHeader>Section 1</AccordionSectionHeader>
            <AccordionSectionTextContent>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum.
            </AccordionSectionTextContent>
            <AccordionSideContent>
              <img src={cat1Img} alt="first cat" />
            </AccordionSideContent>
          </AccordionSection>
          <AccordionSection>
            <AccordionSectionHeader>Section 2</AccordionSectionHeader>
            <AccordionSectionTextContent>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </AccordionSectionTextContent>
            <AccordionSideContent>
              <img src={cat2Img} alt="second cat" />
            </AccordionSideContent>
          </AccordionSection>
          <AccordionSection>
            <AccordionSectionHeader>Section 3</AccordionSectionHeader>
            <AccordionSectionTextContent>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet.
            </AccordionSectionTextContent>
            <AccordionSideContent>
              <img src={cat3Img} alt="third cat" />
            </AccordionSideContent>
          </AccordionSection>
        </div>
        <AccordionSideContentContainer />
      </Accordion>
    );
  }
}
```

## Components

### Accordion

The outermost wrapper of the accordion. Manages the state of sections and the currently shown side content. Place any
other components as children of this wrapper.

### AccordionSection

An expandable section of the accordion. Inside, you may place elements that alter the section's state of expansion (AccordionSectionHeader) or display information based on this state (AccordionSectionTextContent or custom ones using the AccordionSectionContext). Additionally, a section may contain any number of SideContent components which get rendered inside the Accordion's AccordionSideContentContainer.

### AccordionSectionHeader

A button which, when pressed, changes the expansion status of the accordion section it is placed in.

### AccordionSectionTextContent

The text of a section. Expands/contracts based on the given expansion status of the surrounding section. This is done by controlling the height of the rendered element.

### AccordionSideContentContainer

A container in which all SideContent components contained within all AccordionSections is rendered. Individual elements are wrapped in a container with css class 'active'/'inactive' depending on the expansion state of the section.

### AccordionSideContent

The content to be displayed to the side of the accordion if the parent section is currently expanded.

## Context

### AccordionContext

Context to be consumed by a section component. Passes information on which sections are open, mapping between unique section IDs and their side content, and functions to manipulate this state.

### AccordionSectionContext

Context to be consumed by the children of a section. Passes the unique ID of the section and whether the section is currently expanded or not.

## Styles

To quickly try out this component with some simple transition animations, you may just import the contained example styles:

```jsx
import 'react-side-content-accordion/dist/example.css';
```

For custom styling, you can add your own class names to components as you see fit or base your styles on the class names used by the components (e.g., side-content for SideContent components). If you are using AccordionSectionTextContent, you likely want to include ```overflow: hidden;```. You likely also want to include ```opacity: 0;``` for inactive SideContent (as by default, all SideContent is rendered).

## License

MIT © [hubblr](https://github.com/hubblr)
