import './Colaborador.css'

const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
            <img src='https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png' alt={props.nome}/>
            </div>
            <div className='rodape'> 
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>

    )
}

export default Colaborador