import {combineReducers, createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import axios from 'axios';
const trainers = (state = [], action)=>{
    if(action.type === 'SET_TRAINERS'){
        state = [...action.trainers]
    }
    return state;
}

const pokemons = (state = [], action)=>{
    // if(action.type === 'SET_TRAINERS'){
    //     state = [...action.data]
    // }
    return state;
}

const reducer = combineReducers({
    trainers,
    pokemons
})
const store = createStore(reducer,applyMiddleware(thunk));

const fetchTrainer = ()=>{
    return async(dispatch)=>{
        const trainers = (await axios.get('/api/trainers')).data
        dispatch({type:'SET_TRAINERS',trainers})
    }
}
export {fetchTrainer};
export default store;