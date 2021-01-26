# @hubblr/react-side-content-accordion

> React accordion component which displays side content depending on currently expanded sections.

[![NPM](https://img.shields.io/npm/v/@hubblr/react-side-content-accordion.svg)](https://www.npmjs.com/package/@hubblr/react-side-content-accordion) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

* [Example](#example)
* [Install](#install)
* [Usage](#usage)
* [Components](#components)
* [Context](#context)
* [Styles](#styles)
* [License](#license)

## Example

If you want to see the component in action, check out this [straightforward example](https://hubblr.github.io/react-side-content-accordion/).

## Install

```bash
npm install --save @hubblr/react-side-content-accordion
```

## Usage

```jsx
import React, { Component } from 'react'

import {
  Accordion,
  AccordionSection,
  AccordionSectionHeading,
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
            <AccordionSectionHeading>Section 1</AccordionSectionHeading>
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
            <AccordionSectionHeading>Section 2</AccordionSectionHeading>
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
            <AccordionSectionHeading>Section 3</AccordionSectionHeading>
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

The provided components can be divided into two distinct categories: Wrapper components that manage the state of the accordion ([Accordion](#accordion), [AccordionSection](#accordionsection)) and presentational components placed inside these wrappers ([AccordionSectionHeading](#accordionsectionheading), [AccordionSectionTextContent](#accordionsectiontextcontent), [AccordionSideContentContainer](#accordionsidecontentcontainer), [AccordionSideContent](#accordionsidecontent)) to which the accordion state is passed via [React Contexts](#context). Each component adds to its top level HTML element its name as a css class in kebab-case (e.g., the AccordionSection component surrounds its content with a <div> element with the css class 'accordion-section') to enable easy [styling](*styles). Additionally, each component also takes a ```className``` prop to allow for custom css classes.

### Accordion

The outermost wrapper of the accordion. Manages the state of sections and the currently shown side content. Inside, place wrappers for your sections ([AccordionSection](#accordionsection)) and the container for the current side content ([AccordionSideContentContainer](#accordionsidecontentcontainer)).

**Additional Props**

| Prop                  | Type          | Optional           | Description                                                                       |
|-----------------------|---------------|--------------------|-----------------------------------------------------------------------------------|
| allowMultipleExpanded | ```boolean``` | :heavy_check_mark: | Whether multiple sections can be expanded at the same time. Default: ```false```. |
| allowAllCollapsed     | ```boolean``` | :heavy_check_mark: | Whether all sections can be collapsed at the same time. Default: ```false```.     |

When setting these props, always keep in mind that the shown side content stands in direct correlation to the currently expanded sections.

### AccordionSection

An expandable section of the accordion. Inside, you may place components that alter the section's state of expansion ([AccordionSectionHeading](#accordionsectionheading)) or display information based on this state ([AccordionSectionTextContent](#accordionsectiontextcontent) or custom components using the [AccordionSectionContext](#accordionsectioncontext)). Additionally, a section may contain any number of [AccordionSideContent](#accordionsidecontent) components which get rendered inside the parent [Accordion](#accordion) component's [AccordionSideContentContainer](#accordionsidecontentcontainer).

**Additional Props**

| Prop              | Type          | Optional           | Description                                                                           |
|-------------------|---------------|--------------------|---------------------------------------------------------------------------------------|
| initiallyExpanded | ```boolean``` | :heavy_check_mark: | Whether the section content should be expanded on first render. Default: ```false```. |

### AccordionSectionHeading

A button which, when pressed, changes the expansion status of the accordion section it is contained in. Place within an [AccordionSection](#accordionsection) component.

### AccordionSectionTextContent

The text of a section. Expands/contracts based on the given expansion status of the surrounding section. This is done by controlling the height of the rendered element. Place within an [AccordionSection](#accordionsection) component.

### AccordionSideContentContainer

A container in which all [AccordionSideContent](#accordionsidecontent) components contained within all [AccordionSection](#accordionsection) components are rendered. Individual elements are wrapped in a container with additional css class 'active'/'inactive' depending on the expansion state of the section. Be careful: [AccordionSideContent](#accordionsidecontent) components are not placed directly within this component.

### AccordionSideContent

The content to be displayed to the side of the accordion if the parent section is currently expanded. Place within the [AccordionSection](#accordionsection) the side content is semantically related to. Will be rendered within the [AccordionSideContentContainer](#accordionsidecontentcontainer).

## Context

### AccordionContext

React Context provided by the [Accordion](#accordion) component. To be consumed by [AccordionSection](#accordionsection) components and the [AccordionSideContentContainer](#accordionsidecontentcontainer). Passes information on which sections are open, a mapping between unique section IDs and their side content, and functions to manipulate these parts of the accordion state.

| Parameter                | Type                                | Description                                                                  |
|--------------------------|-------------------------------------|------------------------------------------------------------------------------|
| expandedSections         | ```string[]```                      | Currently expanded sections by uuid.                                         |
| changeSectionStatus      | ```(string) => void```              | Changes the expansion status of a section identified by the provided uuid.   |
| sideContentMap           | ```{ uuid: HTMLElement }```         | Mapping between uuid of sections and their related side content.             |
| addSideContentForSection | ```(HTMLElement, string) => void``` | Maps the given side content and uuid of a section within the sideContentMap. |

### AccordionSectionContext

React Context to be consumed by the children of a section. Passes the unique ID of the section and whether the section is currently expanded or not.

| Parameter  | Type           | Description                                       |
|------------|----------------|---------------------------------------------------|
| uuid       | ```string[]``` | The unique ID of the section.                     |
| isExpanded | ```boolean```  | Whether the section is currently expanded or not. |

## Styles

To quickly try out this component with some simple transition animations like in the [example above](#example), you may just import the included example styles:

```jsx
import 'react-side-content-accordion/dist/example.css';
```

For custom styling, you can add your own class names to components as you see fit or base your styles on the class names used by the components. If you are using [AccordionSectionTextContent](#accordionsectiontextcontent), you likely want to include ```overflow: hidden;```. You likely also want to set ```opacity: 0;``` for inactive side content (as by default, all side content is rendered within the [AccordionSideContentContainer](#accordionsidecontentcontainer)).

## License

MIT © [hubblr](https://github.com/hubblr)
