import React from 'react'
import Head from "next/head";
import { NavBar } from '../../components/NavBar/index';

const GitHub = () => {
  return (
    <>
      <Head >
        <title>comandos.dev (GitHub)</title>
      </Head>
      <NavBar />
      <div>GitHub</div>
      <main>
      <section>
        <h1>Comandos principais do git:</h1>

        <ul>
          <li>
            <h3>Inicio</h3>
          </li>
          <ul>
            <li><span>git clone </span><span class="laranja"> &lt;endereço do repositório em: ssh ou http&gt;</span></li>
            <li><span>git init</span> (se usa um ou outro, os dois criam o diretório .git)</li>
            <li><span>git remote add origin</span><span class="laranja"> &lt;endereço do repositório em: ssh ou http&gt;</span>
              (se conecta ao repositório do git/nuvem)</li>
            <li><span>git remote -v</span> (mostra se conectou)</li>
          </ul>
          <li>
            <h3>Baixar</h3>
          </li>
          <ul>
            <li><span>git pull origin</span><span class="laranja"> &lt;NomeDaBranch&gt;</span> (Nome da ramificação que vc quer
              baixar) </li>
            <li><span>git pull</span> (recebe os arquivos atualizados do remoto para o local) </li>
          </ul>
          <li>
            <h3>Info</h3>
          </li>
          <ul>
            <li><span>git status</span> (mostra o status dos arquivos, se está certo ou não os arquivos no seu local)</li>
            <li><span>git log</span> (mostra o histórico dos seus commits)</li>
          </ul>
          <li>
            <h3>Ramificações</h3>
          </li>
          <ul>
            <li><span>git checkout -b</span> <span class="laranja"> &lt;nomeDaNovaBranch&gt;</span> (cria e troca uma nova
              ramificação)</li>
            <li><span>git branch -b</span> (mostra as ramificações que tem no repo da nuvem)</li>
            <li><span>git branch</span> (mostra as ramificações que tem no seu repo local)</li>
            <li><span>git branch</span> <span class="laranja"> &lt;nomeDaBranch&gt; </span> (mudar de branch)</li>
          </ul>
          <li>
            <h3>Editando arquivos</h3>
          </li>
          <ul>
            <li><span>git add</span><span class="laranja"> &lt;nomeDoArquivoOuDiretorio&gt;</span> ou <span class="laranja"> .
              </span>(adiciona o arquivo alterado ao seu git local)</li>
            <li><span>git commit -m</span><span class="laranja">{ `"Descrição do que vc alterou"`}</span>{`Adiciona uma nota,
              adiciona um ponto na sua linha do tempo, da ramificação | É recomendado que a cada mudança vc faça um git
              commit)`}</li>
          </ul>
          <li>
            <h3>Enviar</h3>
          </li>
          <ul>
            <li><span>git push -u origin</span><span class="laranja"> &lt;nomeDaBranch&gt; </span>{` (o nome da ramificação que
              vc quer enviar| o '-u' é se vc está fazendo o primeiro envio desta branch[ramificação])`}</li>
            <li><span>git push</span> (depois só use este comando, se vc seguiu o primeiro de cima)</li>
          </ul>
        </ul>
      </section>
      </main>
    </>
  )
}

export default GitHub;