import { useState } from "react";
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

    const aoSelecionado = (event) => {
        props.aoAlterado(event.target.value);
    }

    return (
        <div className="lista-suspensa">
            <label>
                {props.label}
            </label>
            <select value={props.valor} onChange={aoSelecionado} required={props.obrigatorio}>
                <option value=""></option>
                {props.itens.map( item => <option key={item} value={item}>{item}</option> )}
            </select>
        </div>
    )
}

export default ListaSuspensa;