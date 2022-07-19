const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numOfIceCreams:20
}

const IceCreamSlice = createSlice({
    name:'IceCream',
    initialState:initialState,
    reducers:{

        orderIceCream:(state)=>{

            state.numOfIceCreams--

        },
        restockIceCream:(state,action)=>{
            state.numOfIceCreams += action.payload
        }
    }
})



module.exports = IceCreamSlice.reducer
module.exports.IceCreamActions = IceCreamSlice.actions