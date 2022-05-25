import {createStore ,applyMiddleware ,combineReducers}  from 'redux'
import thunk  from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productReducer, } from './reducers/Product'
import { cartReducer, } from './reducers/cartRwducer'

const reducer = combineReducers ({

    productReducer:productReducer,
    
    cartReducer:cartReducer
      
// user  a ne

})


let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [ ],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}


const middlware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))




export default store;