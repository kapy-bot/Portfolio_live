import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi, I’m Kalpana and I am a creative Frontend developer who dreams of making the world a better place by creating captivating products.
        </SectionText>
        <Button onClick={() => window.location.href = 'https://www.linkedin.com/in/kalpana-chaudhary-00a8762a8/'}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
