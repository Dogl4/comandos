import React from 'react'
import Head from "next/head";
import { NavBar } from '../components/NavBar';
import Link from 'next/link';

const home = () => {
  return (
    <>
      <Head >
        <title>comandos.dev</title>
      </Head>
      <NavBar />
      <div>home</div>
      <main>
        <section>
          <h1>Sumário</h1>
          <ol>
            <li>Terminal
              <div>
                <ul>
                  <li>Acessibilidade</li>
                  <li><Link href="/terminal/git-hub">GitHub</Link></li>
                  <li>npm</li>
                </ul>
              </div>
            </li>

            <li>JavaScript
              <div>
                <ul>
                  <li>Básico</li>
                  <li>DOM (document | localStorage | cookies)</li>
                  <li>LocalStorage</li>
                  <li>HOFs</li>
                  <li>Funções Nativas</li>
                  <li>APIs (Funções assíncronas | Requisições)</li>
                </ul>
              </div>
            </li>
            <li>HTML</li>
            <li>CSS
              <div>
                <ul>
                  <li>Bibliotecas | FrameWorks</li>
                </ul>
              </div>
            </li>
            <li>Visual Studio Code
              <div>
                <ul>
                  <li>Atalhos</li>
                </ul>
              </div>
            </li>
          </ol>
        </section>
      </main>
    </>
  )
}

export default home;