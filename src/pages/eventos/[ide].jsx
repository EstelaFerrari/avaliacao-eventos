import Footer from "@/components/Footer"
import Header from "@/components/Header"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Evento(){

    const [evento, setEvento] = useState({})
    const router = useRouter()
    
    useEffect(() =>{
        
        const id = router.query.id

        if(id){
            axios.get(`http://localhost:3001/eventos/${id}`)
            .then(resultado => setEvento(resultado.data))
            .catch(erro => console.error("Erro ao obter dados do evento:", erro));
        }

    },[router])

    if (evento) return(
        <>
            <Header/>
            <h2>{evento.titulo}</h2>
            <h2>{evento.descricao}</h2>
            <Footer/>


        </>
    )
}
