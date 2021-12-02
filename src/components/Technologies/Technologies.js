import React from 'react';
import { DiCompass, DiFirebase, DiMaterializecss, DiReact, DiStylus, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Javascript, React.js and Next.js
        </ListParagraph>
      </ListContainer>
      </ListItem>
      <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node.js, Express.js and Databases
        </ListParagraph>
      </ListContainer>
      </ListItem>
      <ListItem>
      <DiMaterializecss size="3rem" />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br />
          Styled-Components, Bootstrap, Tailwind and Material UI
        </ListParagraph>
      </ListContainer>
      </ListItem>
      <ListItem>
      <DiCompass size="3rem" />
      <ListContainer>
        <ListTitle>CMS</ListTitle>
        <ListParagraph>
          Experience with <br />
          Strapi and GraphCMS
        </ListParagraph>
      </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
