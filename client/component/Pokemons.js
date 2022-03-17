import axios from "axios";
import React, { Component } from "react";
class Pokemons extends Component{
    constructor(){
        super(),
        this.state = {
            pokemons:[]
        }
    }
    async componentDidMount(){
        const pokemons = (await axios.get('/api/pokemons')).data
        this.setState({pokemons})
    }
    render(){
        return(
            <div>
                {this.state.pokemons.map((pokemon)=>{
                return(
                    <li key={pokemon.id}>{pokemon.name}</li>
                )})
                }
            </div>
        )
    }

}

export default Pokemons;