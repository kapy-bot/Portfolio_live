import React from "react";

import {
  Section,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { Description, LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <Description>
          Hi, I’m Kalpana, a Full-Stack Developer and AI Engineer. I turn complex ideas into practical products, ranging from modern digital platforms to intelligent systems that solve real-world challenges.
I enjoy working on projects where technology, creativity, and problem-solving come together to create meaningful impact.
        </Description>

        <Button onClick={() => window.location.href = 'www.linkedin.com/in/kalpana-c-00a8762a8'}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
