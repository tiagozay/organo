import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {

    if(props.colaboradores.length == 0){
        return;
    }

    return (
        <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

            <div className="colaboradores">
                {props.colaboradores.map( colaborador => 
                    <Colaborador 
                        key={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                        imagem={colaborador.imagem}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                    /> 
                )}
            </div>

        
        </section>
    )
}

export default Time;