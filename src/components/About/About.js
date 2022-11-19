import React from "react";
import {
  AboutContainer,
  ImageContainer,
  Img,
  ContentContainer,
  Link,
} from "./AboutStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";

import { reveal } from "../Animation/Animation.js";
import { useScroll } from "../Scroll/useScroll.js";
import { motion } from "framer-motion";

import Slider from "../Slider/Slider";

const Timeline = () => {
  const [element, controls] = useScroll();

  return (
    <Section id="about" ref={element}>
      <motion.div
        variants={reveal}
        animate={controls}
        transition={{ delay: 0.2, stiffness: 300 }}
      >
        <SectionDivider />
        <SectionTitle>About me</SectionTitle>
        <SectionText>My introduction</SectionText>
        <AboutContainer>
          <ImageContainer>
            <Slider />
          </ImageContainer>

          <ContentContainer>
            <SectionText>
              Diligent software engineer with 1+ years of experience, the key
              goal that I want to become the best Front-end developer in the
              nation, by working productively, and the challenges faced every
              day with strong code-passion, self-learning, and applying
              cutting-edge technologies. I do intentionally focus on
              prolem-solving, accessibility, performance, and speedy
              development.
            </SectionText>
            <Button form>
              <Link
                href="/documents/JUNIOR-FRONTEND-DEVELOPER-TRAN-TRONG-NHAN.pdf"
                download="JUNIOR FRONTEND DEVELOPER - TRAN TRONG NHAN"
              >
                Download CV
              </Link>
            </Button>
          </ContentContainer>
        </AboutContainer>
      </motion.div>
    </Section>
  );
};

export default Timeline;
