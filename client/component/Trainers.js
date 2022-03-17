import axios from "axios";
import React, { Component } from "react";

class Trainers extends Component{
    constructor(){
        super(),
        this.state = {
            trainers:[]
        }
    }

    async componentDidMount(){
        const trainers = (await axios.get('/api/trainers')).data
        this.setState({trainers})
    }
    render(){
        return(
            <div>
                {this.state.trainers.map((trainer)=>{
                return(
                    <div>
                        <li key={trainer.id}>{trainer.name}</li>
                    </div>)
                })}
            </div>
        )
    }

}

export default Trainers;
