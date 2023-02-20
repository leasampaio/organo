import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">            
            <form >
                <h2> Preencha o formulário para criar o card do colaborador:</h2>
                <CampoTexto label="Nome" placeholder= "Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto label="Imagem"placeholder="Digite o enderenço da imagem"/>
            </form>
        </section>
    )

}
export default Formulario