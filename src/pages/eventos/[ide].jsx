import Footer from "@/components/Footer"
import Header from "@/components/Header"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./styles.module.css"

export default function Evento() {

    const [evento, setEvento] = useState({})
    const router = useRouter()

    useEffect(() => {

        const id = router.query.ide

        console.log(id);

        if (id) {
            axios.get(`http://localhost:3000/eventos/${id}`)
                .then(resultado => setEvento(resultado.data))
                .catch(erro => console.error("Erro ao obter dados do evento:", erro));
        }

        console.log(evento.imagem)

    }, [router])

    function formatarData(data) {
        if (typeof data === 'string') {
            const [ano, mes, dia] = data.split('-');
            return `${dia}/${mes}/${ano}`;
        } else {
            return data;
        }
    }

    if (evento) return (
        <>
            <div className={styles.pagina}>
                <Header />
                <div className={styles.corpo}>
                    <div className={styles.evento_pagina}>
                        <div className={styles.imagem} tyle={{ 'background-image': `url(${evento.imagem})` }}>
                            <div className={styles.desfocar}>
                                <img className={styles.imagem_evento} src={`../${evento.imagem}`} />
                            </div>
                        </div>
                                <div className={styles.dados_eventos}>
                                    <h2>{evento.titulo}</h2>
                                    <h4>{evento.descricao}</h4>
                                    <h4>{formatarData(evento.dataInicio)}</h4>
                                    <h4>{formatarData(evento.dataFim)}</h4>
                                    <h4>{evento.local}</h4>
                                </div>
                    </div>
                </div>

                <Footer />
            </div>


        </>
    )
}
