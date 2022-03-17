import React from "react";
import { connect } from "react-redux";
const Nav = (props)=>{
    const trainers = props.trainers

    return(
        <div>
            <h1>Welcome</h1>
            <div className="row">
                <a>Trainers({trainers.length})</a>
            </div>
        </div>
    )
}

export default connect(state => state)(Nav);