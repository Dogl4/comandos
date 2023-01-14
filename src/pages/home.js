import React from 'react'
import Head from "next/head";
import { NavBar } from '../components/NavBar';

const home = () => {
  return (
    <>
      <Head >
        <title>comandos.dev</title>
      </Head>
      <NavBar />
      <div>home</div>
    </>
  )
}

export default home;