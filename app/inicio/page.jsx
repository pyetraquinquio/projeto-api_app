"use client"; // for nextjs 13.4 user

import React from "react";
import '@/components/TrendingSlider';
import style from "@/app/inicio/intro.module.css";
import styles from "@/app/equipe/equipe.module.css";
import Link from "next/link";
<<<<<<< HEAD
=======
import styles from "@/app/inicio/intro.module.css";
>>>>>>> fedee3b79d58770d5955c9bcc9f4696e7d1b0b20
import TrendingSlider from "@/components/TrendingSlider";


 function introducao() {
   return(
    <>
            <header className={styles.header}>
                <h1 className={styles.h1}>PokeDex</h1>
                <nav>
                    <ul>
<<<<<<< HEAD
=======
                    
>>>>>>> fedee3b79d58770d5955c9bcc9f4696e7d1b0b20
                        <li>
                            <Link href="/info1">Informações 1</Link>
                        </li>
                        <li>
                            <Link href="/info2">Informações 2</Link>
                        </li>
                        <li>
                            <Link href="/equipe">Equipe</Link>
                        </li>
                        <li>
                            <Link href="/pokemon">Pokemon</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            
    <TrendingSlider></TrendingSlider>
    <br></br>
      <div className={style.tudo}>
      <section className={style.img_fundo}>

            <h1 className={style.hh1}>PokéAPI</h1>
            <br></br>

          <p>O PokéAPI V1 foi criado por Paull Hallet como um projeto de fim de semana, 
          mas rapidamente se tornou mais do que um trabalho de fim de semana. 
          Em Dezembor de 2014, Paul descontinuou a V1 em favor de trabalhar na V2.
           O site fornece uma interface API RESTful para objetos altamente detalhados.
          </p>

      </section>
      <br></br>
      <br></br>
      <br></br>

      <section className={style.img_fundo}>

      <h1 className={style.hh1}>PokeDéx</h1>
            <br></br>

          <p className={style.fundo_texto}>A Pokedéx é um dos itens mais importantes de um Treinador Pokemon, 
          com ela é possível saber diversas informações sobre as criaturas,
           sobre seu tipo e também algumas curiosidades importantes.
            Apesar de se manter como uma grande ferramenta para catalogar todos os monstrinhos da região,
             ela foi ganhando novas funcionalidades e outras formas com o passar dos anos.
          </p>

      </section>
    </div>
    <br></br> 
    <br></br> 
    <br></br> 

    <footer>
            <p>Grupo 05</p>
            <p>SESI/SENAI</p>
            <p>2023</p>
        </footer> 


  </>
  
  )
  
    };

    export default introducao;

    




    
    