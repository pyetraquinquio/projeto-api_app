"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./TrendingSlider.css";
import styles from '@/app/intro/intro.module.css'


 function introducao() {
    const filteredItems = [
        {
          id: 1,
          img: '/slide/poke1',
          description: "Barroco",
          Link: "/pagArtes/barroco"
        },
        {
          id: 2,
          img: '/slide/poke2',
          description: "Rococó",
          Link: "/pagArtes/rococo"
    
        },
        {
          id: 3,
          img: '/slide/poke3',
          description: "Renascimento",
          Link: "/pagArtes/renascimento"
    
        },
        {
          id: 4,
          img: '/slide/poke4',
          description: "Impressionismo",
          Link: "/pagArtes/impressionismo"
    
        },
        {
          id: 5,
          img: 'slide/poke5',
          description: "Romantismo",
          Link: "/pagArtes/romantismo"
    
        },
       
      ];

      const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
      };
    
      const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
      };
      return (
        <>
          <div className="trending">
            <div className="container">
              <div className="title-btns">
                <h3></h3>
                <div className="btns">
                  <button title="scroll left" onClick={slideLeft}>
                    <AiOutlineArrowLeft />
                  </button>
                  <button title="scroll right" onClick={slideRight}>
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
              <div className="row-container" id="slider">
                {filteredItems.map((item) => (
                  <div key={item.id} className="row-item">
                    <Link className="link" href={item.Link}>
                      <div className="item-header">
                        <img src={item.img} alt="product" />
                      </div>
                      <div className="item-description">
                        <p>{item.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

      
      <div className={styles.tudo}>
      <section className={styles.img_fundo}>


          <p className={styles.fundo_texto}>O PokéAPI V1 foi criado por Paull Hallet como um projeto de fim de semana, 
          mas rapidamente se tornou mais do que um trabalho de fim de semana. 
          Em Dezembor de 2014, Paul descontinuou a V1 em favor de trabalhar na V2.
           O site fornece uma interface API RESTful para objetos altamente detalhados.
          </p>

      </section>
      <br></br>
      <br></br>
      <br></br>

      <section className={styles.img_fundo}>


          <p className={styles.fundo_texto}>A Pokedéx é um dos itens mais importantes de um Treinador Pokemon, 
          com ela é possível saber diversas informações sobre as criaturas,
           sobre seu tipo e também algumas curiosidades importantes.
            Apesar de se manter como uma grande ferramenta para catalogar todos os monstrinhos da região,
             ela foi ganhando novas funcionalidades e outras formas com o passar dos anos.
          </p>

      </section>



      
    </div> 
  </>
  
  )
    };

    export default introducao;

    




    
    