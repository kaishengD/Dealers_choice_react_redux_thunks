import React, { Component } from "react";
import {connect} from 'react-redux'
import store from "./store";
const Trainers = (props)=>{
    const trainers = props.trainers
    console.log(trainers)
    return(
        <div>
            {trainers.map((trainer)=>{
            return(
                <li key={trainer.id}>{trainer.name}</li>
            )})
            }
        </div>
    )
}

export default connect(state=>state)(Trainers);
