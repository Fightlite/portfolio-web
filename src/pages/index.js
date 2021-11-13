import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Contact from '../components/Contact/Contact';
import Portfolio from '../components/Portfolio/Portfolio';

import {motion } from 'framer-motion'

const Home = () => {
  return (
    <>
    <Layout>
      <motion.div initial='hidden' animate='show'>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <About />
      <Portfolio />
      <Technologies />
      <Contact />
      </motion.div>
    </Layout>
    </>
  );
};

export default Home;
