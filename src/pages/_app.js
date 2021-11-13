import Theme from '../styles/theme';
import { useState } from 'react'

import Header from '../components/Header/Header.js'
import Sidebar from '../components/Sidebar/Sidebar.js'
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Living, Learning, and Coding</title>
      </Head>
      <Theme>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Header toggle={toggle}/>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 