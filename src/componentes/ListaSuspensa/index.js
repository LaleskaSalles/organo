import './ListaSuspensa.css'
import { useState } from 'react'

const ListaSuspensa = (props) => {



    const [focused, setFocused] = useState(false)
    const handleFocus = (e) =>{
        setFocused(true)
    }

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.required} 
                value={props.valor}> 
                <option value="">--Selecione um time--</option>
                {props.itens.map(item => <option>{item}</option>)}
                onBlur={handleFocus}
                focused={focused.toString()}
            </select>
            <span>{props.errorMessage}</span>
        </div>
        
    )
}

export default ListaSuspensa