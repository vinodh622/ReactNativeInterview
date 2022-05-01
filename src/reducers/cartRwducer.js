//  function productReducer (state={products:[]}, action,) {
//     switch (action.type) {

//         default:
//            return state;
//     }

//  }
//  export {productReducer};
import { CARTADD } from "../actions/constants";

function cartReducer(state = { cart: [], loading: true }, action) {
  switch (action.type) {
    ///console.log(action.payload.product)

    case CARTADD:
      let obj1 = action.payload;
      let obj2 = { qty: 1 };

      let spreadData = { ...obj1, ...obj2 };

      const data = spreadData;
      let isexists = state.cart.find((e) => e._id === data._id);
///haaaaaascscscscscdvdsvdsvsd
      return {
        cart: isexists
          ? state.cart.map((e) =>
              e._id === data._id
                ? { ...isexists, haiw: 1, qty: isexists.qty + 1 }
                : e
            )
          : [...state.cart, data],
      };

    // case CARTADD:
    //   const io = action.payload;
    //   let exist = state.cart.find(item =>
    //     item.product === io.product ,
    //   );

    //   console.log(exist,"wdjw9ud90wd90wu90u9u")

    //   return {

    //   //  onCheck:false,
    //   cart: exist
    //       ? state.cart.map(item =>
    //           item.product === io.productitem ? {...exist, quantity: exist.quantity + 1} : item,
    //         )
    //       : [...state.cart, io ],

    //   };

    default:
      return state;
  }
}

export { cartReducer };
