import React from "react";
import filtros from "./filltros.json"
import styles from "./filtros.module.scss"

type IOpcao = typeof filtros[0];

interface Props  {
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro}: Props){

    function selecionarFiltro(opcao:IOpcao){
        if(filtro === opcao.id){
            return setFiltro(null)
        }
        return setFiltro(opcao.id)
    }

    return <div className={styles.filtros}>
        {filtros.map((opcao) => (
            <button 
            className={`${styles.filtros__filtro} ${filtro === opcao.id ? styles.ativo : ""}`} 
            key={opcao.id} onClick={()=> selecionarFiltro(opcao)}>
                {opcao.label}
            </button>
        ))}
    </div>
}