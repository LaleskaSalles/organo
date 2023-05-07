import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    const [focused, setFocused] = useState(false)
    const handleFocus = (e) =>{
        setFocused(true)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
            value={props.valor} 
                onChange={aoDigitado} 
                required={props.required} 
                placeholder={props.placeholder}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span>{props.errorMessage}</span>
        </div>
    )
}

export default CampoTexto