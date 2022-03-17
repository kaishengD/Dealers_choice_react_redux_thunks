import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import Trainers from './Trainers';
import store from './store';
import {fetchTrainer} from './store'
import {connect} from 'react-redux'
import axios from 'axios';
export default connect(
    null,
    (dispatch)=>{
        return{
            loadData:async()=>{
                const trainers = (await axios.get('/api/trainers')).data
                dispatch({type: 'SET_TRAINERS',trainers})
            }
        }
    }
)(class App extends React.Component{
    async componentDidMount(){
       this.props.loadData()
    }
    render(){
        return(
            <div>
                <Nav />
                <Trainers />
            </div>   
    )}
})
