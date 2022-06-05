export const initialState = {
    cart:[],
    user: null
};

function cartReducer(state=initialState,action){
    switch(action.type){
        case 'item/added':
        
            return {state,cart:[...state.cart,action.payload]}
           

            
        case 'item/removed':
            console.log(state,'state')
           
    }
    return state;
}

export default cartReducer