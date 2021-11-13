import React from 'react';

import { Section, SectionText, SectionSubTitle, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

import { headerAnimation, imageAnimation } from '../Animation/Animation.js'
import { useScroll } from '../Scroll/useScroll.js'
import { motion } from "framer-motion"

const Hero = (props) => {
  const [ element, controls] = useScroll();

  return (
  <Section row nopadding ref={element}>
    <motion.div variants={headerAnimation} animate={controls} transition={{ delay: 0.2, type: 'tween'}}>
    <LeftSection>
      <SectionTitle main>
        Hi, I'm Nhan
      </SectionTitle>
      <SectionSubTitle>
      Front-end Developer
      </SectionSubTitle>
      <SectionText>
        Welcome to my portfolio<br/>
        and let’s take a look at<br/>
        the projects I have been built.
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Discover</Button>
    </LeftSection>
    </motion.div>
  </Section>
  )
}

export default Hero;