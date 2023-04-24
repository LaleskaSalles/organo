import './Formulario.css'
import CampoTexto from "../CampoTexto"

const Formulario = () =>{
    return(
      <section className='formulario'>
        <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="Informe seu nome"/>
            <CampoTexto label="Cargo" placeholder="Informe seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Adicione uma imagem"/>
        </form>
    </section>  
    )
    
}

export default Formulario