import Footer from "@/components/Footer"
import Header from "@/components/Header"
import styles from "@/styles/styles.module.css"



export default function Home() {
  return (
    <>
      <Header/>
      <div className={styles.inicio}>
        <img className={styles.imagem} src={"arquitetura-e-urbanismo.png"} />
        <h4 className={styles.texto_inicio}> "Arquitetura é a arte de definir edificações e espaços urbanos, elevando e qualificando ambientes de viver. Arte de atender funções e necessidades de maneira eficiente, incorporando requisitos e normas técnicas, com criatividade e preocupação estética."</h4>
        <h4 className={styles.texto_inicio2}> Essa página é para você que gosta e tem interesse em aprender mais sobre arquitetura. Temos vários cursos e palestras disponiveis, basta clicar em eventos e ter acesso a eles.</h4>
      </div>
      <Footer/>
    </>
  )
}