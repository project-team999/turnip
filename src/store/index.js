import { createStore, applyMiddleware } from 'redux'
import { SETSTATE } from './type/type'
import { fromJS } from 'immutable';
import thunk from 'redux-thunk'




const defaultsState = fromJS({
    list: []
})




const reducer = (state = defaultsState, actions) => {

    switch (actions.type) {

        case SETSTATE:
            
            return state.setIn([actions.key], fromJS(actions.value))

        default:
            return state;
    }

};



const store = createStore(reducer, applyMiddleware(thunk))



store.subscribe(() => console.log(store.getState().toJS()))



export {
    store
}