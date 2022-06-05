

export const initialState = {
    
    cart:[],
    user: null
};

function cartReducer(state=initialState,action){
    switch(action.type){
        case 'item/added':
            console.log(state)
            return {state,cart:[...state.cart,action.payload]}
           

            
        case 'item/removed':
            console.log(state,'state')


        case 'get/items':
            console.log(state)
            return {state}
           
    }
    return state;
}

export default cartReducer