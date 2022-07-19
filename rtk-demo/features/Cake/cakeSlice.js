const redux = require('@reduxjs/toolkit')
const createSlice = redux.createSlice

const initialState = {
    numOfCakes:10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState:initialState,
    reducers:{
        cakeOrdered:(state)=>{
            state.numOfCakes --;
        },
        restockCakes:(state,action)=>{
            state.numOfCakes += action.payload
        }
    }
})


module.exports = cakeSlice.reducer;
module.exports.CakeActions = cakeSlice.actions