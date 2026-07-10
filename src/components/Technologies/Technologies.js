import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
<SectionText>
  Here's a snapshot of the tools and technologies I use most, spanning AI & computer vision, front-end, and back-end development.
</SectionText>

    <List>
    <ListItem>
        <picture>
          <DiZend size="2.2rem" />
        </picture>
        <ListContainer>
          <ListTitle>AI & Computer Vision</ListTitle>
            <ListParagraph>
              Experience with <br />
              Deep Learning (2D/3D Segmentation), PyTorch, Open3D, Vedo, PyMeshLab, PyVita, Mesh Optimization, FHIR Integration, Medical Imaging Workflows
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="2.2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
             Experience with <br />
            Flutter, React.js, Next.js, Vue.js, Tailwind CSS, Bootstrap, HTML, CSS, JavaScript, TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="2.2rem" />
        </picture>
        <ListContainer>
        <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Express.js, Django, Flask, Spring Boot, PHP, MySQL, MongoDB, PostgreSQL
         </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
