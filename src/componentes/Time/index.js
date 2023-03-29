import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) =>{
    const cssFundo = {backgroundColor: props.corSecundaria}
    const ccsBorda = {borderColor: props.corPrimaria}
    
    return(
        (props.colaboradores.length > 0) &&<section className="time" style={cssFundo}>
            <h3 style={ccsBorda}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => 
                <Colaborador nome={colaborador.nome}
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem}  
                />)}
            </div>
        </section>)
};
export default Time;