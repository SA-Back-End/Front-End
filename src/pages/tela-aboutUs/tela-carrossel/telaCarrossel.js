/*
import React, { useState } from 'react';
import './telaCarrossel.css'
import logo from './img/logo.ico'
import backend from './img/back_end.png'
import fundo_azul from './img/fundo_azul.png'
import olho from './img/olho.png'
import coracao from './img/coracao.png'
import alvo from './img/alvo.png'
import linha from './img/linha.png'


export default function TelaCarrossel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: 'Quem Somos?',
      content:
        'A Skills é uma plataforma sem fins lucrativos para pessoas que buscam se desafiar em qualquer área para crescer pessoal e profissionalmente, através da experiência do desenvolvimento de projetos em equipes. Possibilitamos que os usuários encontrem parceiros ideais para colaborar com seus projetos pessoais através da análise de preferências e características de perfis compatíveis que facilitam sua busca.',
      image: 'logo.jpg',
    },
    {
      title: 'Sobre nós',
      content:
        'Somos um projeto desenvolvido pela turma do SENAI/SC de Aprendizagem Industrial para Programação Back-End com o objetivo de colocar em prática nossos conhecimentos adquiridos durante o curso e exibi-los na amostra de inovação “Mundo Senai” do ano de 2023, estimulando nossos sentidos de criatividade, lógica e inovação.',
      image: 'backend.jpg',
    },
    {
      title: 'Missão, Valores e Visão',
      content:
        'Oferecer um ambiente que estimule a criatividade e o desenvolvimento pessoal e profissional, fornecendo experiências e oportunidades únicas a cada usuário. Nossos valores incluem aventura, proatividade, criatividade, inovação, respeito e crescimento. Nossa visão é tornar-se a principal ferramenta utilizada para o aprimoramento de skills pessoais e interdisciplinares e para a busca por colegas de desenvolvimento de projetos.',
      image: 'missao.jpg',
    },
  ];

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="tela-carrossel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === activeIndex ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.title} className="slide-image" />
          <div className="slide-content">
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-text">{slide.content}</p>
          </div>
        </div>
      ))}
      <div className="carousel-navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-button ${index === activeIndex ? 'active' : ''
              }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
}
*/