import React, { Component } from "react";
import {connect} from 'react-redux'

const Trainers = (props)=>{
    const trainers = props.trainers
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
