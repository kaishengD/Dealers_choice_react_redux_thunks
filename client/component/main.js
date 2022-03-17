import React from 'react'
import Nav from './Nav'
import Trainers from './Trainers';
import {fetchTrainer} from './store'
import {connect} from 'react-redux'

export default connect(
    null,
    (dispatch)=>{
        return{
            loadData:async()=>{
                dispatch(fetchTrainer())
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
