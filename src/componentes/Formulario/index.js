import './Formulario.css'
import CampoTexto from "../CampoTexto"
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botão'
import { useState } from 'react'


const Formulario = (props) =>{

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return(
      <section className='formulario'>
        <form onSubmit={aoSalvar}> 
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
                required={true} 
                label="Nome" 
                placeholder="Informe seu nome"
                valor={nome}
                aoAlterado={valor =>setNome(valor)}
            />
            <CampoTexto 
                required={true}  
                label="Cargo" 
                placeholder="Informe seu cargo"
                valor={cargo}
                aoAlterado={valor =>setCargo(valor)}
            />
            <CampoTexto 
                label="Imagem" 
                placeholder="Adicione uma imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa 
                required={true} 
                label="Time" 
                itens = {times}
                aoAlterado={valor => setTime(valor)}
            />
            <Botao>Criar Card</Botao>
        </form>
    </section>  
    )
    
}

export default Formulario