"use client"; // for nextjs 13.4 user

import React from "react";
import '@/components/TrendingSlider';
import styles from "@/app/intro/intro.module.css";
import TrendingSlider from "@/components/TrendingSlider";


 function introducao() {
   return(
    <>
    <TrendingSlider></TrendingSlider>
    
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

    




    
    