import styles from "./styles.module.css"
import Link from "next/link";


export default function Header () {
    return(
        <div>
            <ul className={styles.header}>
                <h2 className={styles.titulo}>Eventos de Arquitetura</h2>
                <li>
                    <Link className={styles.texto_header} href="/">Pagina Inicial</Link>
                </li>
                <li>
                    <Link className={styles.texto_header} href="/eventos">Eventos</Link>
                </li>
            </ul>
        </div>
    )
}