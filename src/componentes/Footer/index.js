import './Footer.css'

const Footer = () =>{

    const aoClicar = (evento) => {
        evento.preventDefault()
    }
    return(
        <div className='footer'> 
            <div className='itens'>
                <div className='social'>
                    <a onClick={aoClicar} href="#"> <img src='/img/fb.png' href="#"></img></a>
                    <a onClick={aoClicar} href="#"><img src='/img/tw.png' href="#"></img></a>
                    <a onClick={aoClicar} href="#"><img src='/img/ig.png' href="#"></img></a>
                </div>
                <div className='logo'>
                    <img src='/img/logo.png'></img>
                </div>
                <div className='autor'>
                    <p>© 2023 Laleska Salomão</p>
                </div>
            </div>
        </div>
    )
}
export default Footer