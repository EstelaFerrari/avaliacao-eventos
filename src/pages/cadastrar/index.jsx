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
            <div>
            <Header />
            </div>

            <div className={styles.corpo_cadastro}>
            <h1>Cadastrar Evento</h1>
            <form onSubmit={e => inserirEvento(e)}>
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        value={evento.titulo}
                        onChange={e => setEvento({
                            ...evento,
                            titulo: e.target.value
                        })} />
                </div>

                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        id="descricao"
                        value={evento.descricao}
                        onChange={e => setEvento({
                            ...evento,
                            descricao: e.target.value
                        })}></textarea>

                    <div>
                        <label htmlFor="dataInicio"> Data de Inicio</label>
                        <input
                            type='date'
                            value={evento.dataInicio}
                            onChange={e => setEvento({
                                ...evento,
                                dataInicio: e.target.value
                            })}></input>
                    </div>

                    <div>
                        <label htmlFor="dataFim"> Data Fim</label>
                        <input
                            type='date'
                            value={evento.dataFim}
                            onChange={e => setEvento({
                                ...evento,
                                dataFim: e.target.value
                            })}></input>
                    </div>

                    <div>
                        <label htmlFor="local"> Local</label>
                        <input
                            type="local"
                            value={evento.local}
                            onChange={e => setEvento({
                                ...evento,
                                local: e.target.value
                            })}></input>
                    </div>

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

                    <div className={styles.formInfoButton}>
                        <Button>Salvar</Button>
                    </div>

                </div>

            </form>
            </div>

            <div>
            <Footer />
            </div>

        </div>

        </>

    )
}