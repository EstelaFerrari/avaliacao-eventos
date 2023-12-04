import Header from "@/components/Header"
import styles from "./styles.module.css"
import axios from "axios"
import { useState } from "react"
import Footer from "@/components/Footer"
import Input from '@/components/Input'
import Button from '@/components/Button';


export default function Cadastrar() {

    const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        local: "",
        imagem: ''
    })




    function inserirEvento(e) {
        e.preventDefault()

        function limparEvento() {
            setEvento({
                titulo: "",
                descricao: "",
                dataInicio: "",
                dataFim: "",
                local: "",
                imagem: ''
            });
        }

        axios.post('http://localhost:3000/eventos', evento)
            .then(resultado => { limparEvento(); console.log(resultado.data) })
            .catch(erro => console.log(erro))

    }

    return (

        <>
            <div className={styles.pagina_cadastro}>

                <Header />

                <div className={styles.corpo_cadastro}>
                    <div>
                        <h1 className={styles.titulo}>Cadastrar Evento</h1>
                    </div>
                    <div>
                        <form onSubmit={e => inserirEvento(e)}>
                            <div>
                                <div className={styles.texto_cadastro}>
                                    <label htmlFor="titulo"><h4>Título:</h4></label>
                                </div>
                                <input className={styles.card_texto}
                                    type="text"
                                    id="titulo"
                                    value={evento.titulo}
                                    onChange={e => setEvento({
                                        ...evento,
                                        titulo: e.target.value
                                    })} />

                                <div className={styles.texto_cadastro}>
                                    <label htmlFor="descricao"><h4>Descrição:</h4></label>
                                </div>
                                <textarea className={styles.descricao}
                                    id="descricao"
                                    value={evento.descricao}
                                    onChange={e => setEvento({
                                        ...evento,
                                        descricao: e.target.value
                                    })}></textarea>


                                <div className={styles.texto_cadastro}>
                                    <label htmlFor="local"><h4>Local:</h4></label>
                                </div>
                                <input className={styles.card_texto}
                                    type="local"
                                    value={evento.local}
                                    onChange={e => setEvento({
                                        ...evento,
                                        local: e.target.value
                                    })}></input>


                                <div>
                                    <div className={styles.texto_cadastro}>
                                        <label htmlFor="dataInicio"><h4>Data de Inicio:</h4></label>
                                    </div>
                                    <input className={styles.card_data}
                                        type='date'
                                        value={evento.dataInicio}
                                        onChange={e => setEvento({
                                            ...evento,
                                            dataInicio: e.target.value
                                        })}></input>
                                </div>

                                <div>
                                    <div className={styles.texto_cadastro}>
                                        <label htmlFor="dataFim"> <h4>Data Fim:</h4></label>
                                    </div>
                                    <input className={styles.card_data}
                                        type='date'
                                        value={evento.dataFim}
                                        onChange={e => setEvento({
                                            ...evento,
                                            dataFim: e.target.value
                                        })}></input>
                                </div>

                                <br />


                                <div className={styles.imagem_cadastro}>
                                    <Input id='imagem' type={'file'}
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const filePath = `/${file.name}`;
                                                setEvento({ ...evento, imagem: filePath });
                                            }
                                        }}
                                    />
                                </div>

                                <br />

                                <div className={styles.formInfoButton}>
                                    <Button>Salvar</Button>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>

                <Footer />

            </div>

        </>

    )
}