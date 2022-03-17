import axios from 'axios';
import React from 'react'
import ReactDOM from 'react-dom'
import Nav from '../client/component/Nav'
import Trainers from '../client/component/Trainers';
class App extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         trainers:[]
    //     }
        // this.create = this.create.bind(this)

    // }       
    // async create(){
    //     console.log('create')
    //     const response = await axios.post('/api/trainers');
    //     const trainer = response.data;
    //     const trainers = [...this.state.trainers, trainer];
    //     this.setState({trainers});
    // }
    // async delete(trainer){
    //     await axios.delete(`/api/trainers/${trainer.id}`)
    //     const trainers = this.state.trainers.filter((_trainer)=>{
    //         return _trainer.id !== trainer.id
    //     })
    //     this.setState({trainers})
    // }

    // async componentDidMount(){
    //     const trainers = (await axios.get('/api/trainers')).data;

    //     this.setState({trainers})
    // }
    render(){
        return(
            // <div>
            //     <h1>
            //         POKEMON Trainer
            //     </h1>
            //     {/* <button onClick={this.create}>Create New Trainer</button> */}
            //     {this.state.trainers.map((trainer)=>{
            //         // return <li key={trainer.id}>{trainer.name}<button onClick={()=>this.delete(trainer)}>x</button></li>
            //         return <li key={trainer.id}>{trainer.name}</li>
            //     })}
            // </div>
            <div>
                <Nav />
                <Trainers />
            </div>   

    )}
}

const root = document.querySelector('#root');
ReactDOM.render(<App />, root)
 