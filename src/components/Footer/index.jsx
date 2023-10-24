import styles from "./styles.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.texto_footer}>
                <h3>Arquitetura</h3>
                <p>Rodovia BR 174, KM 3, n°4334,Zona</p>
                <p>Urbana, Vilhena Rondônia</p>
            </div>
        </footer>
    )
}