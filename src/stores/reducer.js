import { GETSUMMONEY, GETADDRESS, ADDADDRESS,CLEAR } from './action_type';
import { combineReducers } from 'redux';
const initState1 = {
    food: []
}
const initState2 = {
    address: [
        {
            name: '杨女士',
            onlyAddress: '凯德MALL（西直门店）22层'
        },
        {
            name: '杨女士2',
            onlyAddress: '凯德MALL（西直门店）22层'
        }
    ]
}
function getMoney (state = initState1, action) {
    switch(action.type){
        case GETSUMMONEY:
            return Object.assign({}, state , {
                food:[
                    ...state.food,
                    {
                        price: action.text.price,
                        name: action.text.name
                    }
                ]
            })
        case CLEAR:
            return initState1
        default:
            return state
    }
}
function getaddress (state = initState2, action) {
    switch(action.type){
        case GETADDRESS:
            state.address[action.text.num]={
                name: action.text.name,
                onlyAddress: action.text.onlyAddress
            }
            return state
        case ADDADDRESS:
            state.address.push({
                name: action.text.name,
                onlyAddress: action.text.onlyAddress
            })
            return state
        default:
            return state
    }
}
const todoApp = combineReducers({
    getMoney,
    getaddress
})
export default todoApp;