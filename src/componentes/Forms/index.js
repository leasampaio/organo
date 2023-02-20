import CampoTexto from '../CampoTexto'
import './Forms.css'

const Forms = () => {
    return (
        <section>
            <form>
                <CampoTexto label="Nome" placeholder= "Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto label="Imagem"placeholder="Digite o enderenço da imagem"/>
            </form>
        </section>
    )

}
export default Forms