"use client"

import Image from "next/image";
import styles from "@/app/equipe/equipe.module.css";
import Link from "next/link";

export default function PagEquipe() {
    return(
        <section>
            <header className={styles.header}>
                <h1 className={styles.h1}>PokeDex</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/inicio">Início</Link>
                        </li>
                        <li>
                            <Link href="/info1">Informações 1</Link>
                        </li>
                        <li>
                            <Link href="/info2">Informações 2</Link>
                        </li>
                        <li>
                            <Link href="/pokemon">Pokemon</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <br></br>
            <br></br>
        <div className={styles.div}>
            <div className={styles.text}>
                <p>Pyetra Batista Quinquio</p>
                <br></br>
                <p>16 anos</p>
                <br></br>
                <p>Tempo de estudo no SESI: 10 anos</p>
                <br></br>
                <p>Líder</p>
            </div>
            <div className={styles.imagem}>
                <Image src="/grupo/pyh.png" width={350} height={350}/>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className={styles.div}>
            <div className={styles.imagem}>
                <Image src="/grupo/emily.png" width={350} height={350}></Image>
            </div>
            <div className={styles.text}>
                <p>Emily Ribeiro da Silva</p>
                <br></br>
                <p>17 anos</p>
                <br></br>
                <p>Tempo de estudo no SESI: 9 meses</p>
                <br></br>
                <p>Sub-Líder</p>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className={styles.div}>
            <div className={styles.text}>
                <p>Maria Eduarda Carvalho Barbosa</p>
                <br></br>
                <p>17 anos</p>
                <br></br>
                <p>Tempo de estudo no SESI: 9 meses</p>
            </div>
            <div className={styles.imagem}>
                <Image src="/grupo/maria.png" width={350} height={350}/>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className={styles.div}>
            <div className={styles.imagem}>
                <Image src="/grupo/gaby.png" width={350} height={350}></Image>
            </div>
            <div className={styles.text}>
                <p>Gabrielly Vitória Cocielli Cavalcante</p>
                <br></br>
                <p>17 anos</p>
                <br></br>
                <p>Tempo de estudo no SESI: 10 anos</p>
            </div>
        </div>
        <br></br>
        <br></br>
        <footer>
            <p>Grupo 05</p>
            <p>SESI/SENAI</p>
            <p>2023</p>
        </footer>
        </section>
    )
}