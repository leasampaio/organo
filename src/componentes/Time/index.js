import "./Time.css";

const Time = (props) =>{
    const cssFundo = {backgroundColor: props.corSecundaria}
    const ccsBorda = {borderColor: props.corPrimaria}
    
    return(
        <section className="time" style={cssFundo}>
            <h3 style={ccsBorda}>{props.nome}</h3>
        </section>)
};
export default Time;