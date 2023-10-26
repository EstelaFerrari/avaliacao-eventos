import styles from "./styles.module.css"
import Link from "next/link";


export default function Header() {
    return (
        <div className={styles.header}>
            <div>
                <h2 className={styles.titulo}>Eventos de Arquitetura</h2>
            </div>
            <ul className={styles.links}>
                <li>
                    <Link className={styles.texto_header} href="/">Pagina Inicial</Link>
                </li>
                <li>
                    <Link className={styles.texto_header} href="/eventos">Eventos</Link>
                </li>
                <li>
                    <Link className={styles.cadastro} href="/cadastrar">Cadastrar</Link>
                </li>
            </ul>
        </div>
    )
}