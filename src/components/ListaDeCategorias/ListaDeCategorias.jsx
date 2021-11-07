import React, { Component } from 'react';
import "./estilo.css";

class ListaDeCategorias extends Component {
    _handleEventoInput(e){
        if(e.key === "Enter"){
            this.props.adicionarCategoria(e.target.value);
            e.target.value = "";
        }
    }
    render() {
        return(
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">Categoria 1</li>
                    <li className="lista-categorias_item">Categoria 1</li>
                    <li className="lista-categorias_item">Categoria 1</li>
                    <li className="lista-categorias_item">Categoria 1</li>
                </ul>
                <input 
                className="lista-categorias_input" 
                type="text" 
                placeholder="Digite sua categoria"
                onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;