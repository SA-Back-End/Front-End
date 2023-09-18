import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './telaCarrossel.css'
import logo from './img/logo.ico'
import backend from './img/back_end.png'
import fundo_azul from './img/fundo_azul.png'
import olho from './img/olho.png'
import coracao from './img/coracao.png'
import alvo from './img/alvo.png'
import linha from './img/linha.png'


export default function TelaCarrossel() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className='texto'>
            <h1 className='hh'>Quem Somos?</h1>
            <span className='espaco'>A <span className='orange'>Skills</span> é uma plataforma sem fins lucrativos para pessoas que buscam se desafiar em <span className='orange'>qualquer área</span> para crescer <span className='blue'>pessoal</span> e <span className='blue'>profissionalmente</span>, através da experiência do desenvolvimento de <span className='orange'>projetos em equipes.</span> <br />Possibilitamos que os usuários encontrem parceiros ideais para colaborar com seus projetos pessoais através da  <span className='orange'>análise de preferências</span> e características de perfis compatíveis que facilitam sua busca.</span>
          </div>
          <img
            className='logo'
            src={logo}
            alt="SKILLS"
          />
        </Carousel.Item>

        <Carousel.Item>
          <div className='tela_3'>
            <h1 className='sobre_nos'>Sobre nós </h1> <br />
            <h2 className='h2_sobre_nos'>A turma de Back-End</h2>
            <span className='texto_sobre_nos'>Somos um projeto desenvolvido pela turma do <span className='orange'>SENAI/SC</span> de <span className='blue'>Aprendizagem Industrial para
              Programação Back-End</span> com o objetivo de
              colocar em prática nossos conhecimentos adquiridos durante o
              curso e exibi-los na amostra de inovação “Mundo Senai” do ano de 2023,
              estimulando nossos sentidos de <span className='orange'>criatividade, lógica e inovação.</span></span>
          </div>
          <div className='mover'>
            <img className='back_end' src={backend} alt="Back-End" />
            <img className='fundo_azul' src={fundo_azul} />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='icones'>
            <div className='missao'>
              <img className='alvo' src={alvo} alt="Missão" />
              <h2 className='texto-titulo'>Missão</h2>
              <span>Oferecer um ambiente que estimule a <span className='orange'>criatividade</span> e o <span className='orange'>desenvolvimento pessoal</span> e <span className='orange'>profissional</span>, fornecendo <span className='blue'>experiências e oportunidades únicas</span> a cada usuário.</span>
            </div> <img className='linha1' src={linha} />
            <div className='valores'>
              <img className='coracao' src={coracao} alt="Valores" />
              <h2 className='texto-titulo'>Valores</h2>
              <span>
                <span className='orange'>Aventura</span><br />
                <span className='blue'>Proatividade</span><br />
                <span className='orange'>Criatividade</span><br />
                <span className='blue'>Inovação</span><br />
                <span className='orange'>Respeito</span><br />
                <span className='blue'>Crescimento</span><br />
              </span> <img className='linha' src={linha} />
            </div>
            <div className='visao'>
              <img className='olho' src={olho} alt="Visao" />
              <h2 className='texto-titulo'>Visão</h2>
              <span>Tornar-se a principal ferramenta utilizada para o <span className='blue'>aprimoramento de skills</span> pessoais e interdisciplinares e para a <span className='orange'>busca por colegas</span> de desenvolvimento de projetos.</span>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}