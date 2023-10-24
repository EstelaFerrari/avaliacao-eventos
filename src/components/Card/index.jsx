import Link from "next/link"
import styles from "./styles.module.css"
import { useRouter} from "next"


export default function Card ({id, titulo, dataInicio, dataFim, imagem}) {
    return (
        <div className={styles.card}>
            <Link href={`/eventos/${id}`}>
                <img className={styles.cardImagem} src={`${imagem}`}/>
                <div>
                    <h2 className={styles.cardTitulo}>{ titulo }</h2>
                    <div> Data de Inicio: { dataInicio }</div>
                    <div> Data de Fim: { dataFim }</div>
                </div>
            </Link>
        </div>
    )
}