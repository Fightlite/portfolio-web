import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

import { leftAppear, rightAppear } from '../Animation/Animation.js'
import { useScroll } from '../Scroll/useScroll.js'
import { motion } from "framer-motion"

const Technologies = () =>  {
  const [ element, controls] = useScroll();

  return (
  <Section id='tech' ref={element}>
    <SectionDivider />
    <motion.div variants={leftAppear} animate={controls} transition={{ delay: 0.1, type: 'fade'}}>
    <SectionTitle>Technology</SectionTitle>
    <SectionText>
      I have worked with a range of technologies which is required and useful for front-end development.
    </SectionText>
    </motion.div>

    <motion.div variants={rightAppear} animate={controls} transition={{ delay: 0.1, type: 'fade'}}>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            HMTL5<br/>
            CSS3<br/>
            SCSS<br/>
            JavaScript<br/>
            Bootstrap<br/>
            ReactJS<br/>
            React Native<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            NodeJS<br/>
            ExpressJS<br/>
            Firebase<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem' />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Photoshop<br/>
            Illustrator<br/>
            Figma<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    </motion.div>

  </Section>
  )
}

export default Technologies;
