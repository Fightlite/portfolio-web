import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { SiNetflix } from 'react-icons/si'
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, Copyright, Thank, SloganText } from './ContactStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import { motion } from "framer-motion"
import { topAppear, bottomAppear } from '../Animation/Animation.js'
import { useScroll } from '../Scroll/useScroll.js'


const Contact = () => {
  const [ element, controls] = useScroll();

  return (
    <Section id='contact' ref={element}>
      <SectionDivider />
      <motion.div variants={topAppear} animate={controls} transition={{ delay: 0.2, type: 'easeInOut'}}>
      <SectionTitle>Contact</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+84702344789'>070 2344 789</LinkItem>
        </LinkColumn>
        
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:trantrongnhan97@gmail.com'>trantrongnhan97@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      </motion.div>

      <motion.div variants={bottomAppear} animate={controls} transition={{ delay: 0.2, type: 'easeInOut'}}>
      <Slogan>
        <Link href='/'>
          {/* <IoCloseCircle size='5rem' /> */}
          <SiNetflix size='4rem' style={{ border: '1px solid white', borderRadius: '50px'}} />
        </Link>
            <SloganText>
              Living, Learning, and Coding.
            </SloganText>
        </Slogan>
      <SocialIconsContainer>
        <CompanyContainer>
          <Thank>Great! You are here.<br />
          Thank you for taking time to discover my portfolio.<br/>
          If you think that I'm fitted to your requirements. Feel free to contact me.
          </Thank>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href='https://github.com/fightlite/' target='_blank'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.facebook.com/kimkibin09/' target='_blank'>
            <AiFillFacebook size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/tran-trong-nhan-b4a662132/' target='_blank'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

      <Copyright>- Handcrafted by me -</Copyright>
      </motion.div>

    </Section>
  );
};

export default Contact;
