import './Formulario.css'
import CampoTexto from "../CampoTexto"
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botão'


const Formulario = () =>{

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return(
      <section className='formulario'>
        <form onSubmit={aoSalvar}> 
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto required={true} label="Nome" placeholder="Informe seu nome"/>
            <CampoTexto required={true}  label="Cargo" placeholder="Informe seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Adicione uma imagem"/>
            <ListaSuspensa required={true} label="Time" itens = {times}/>
            <Botao>Criar Card</Botao>
        </form>
    </section>  
    )
    
}

export default Formulario