const store = require('./app/store')

const cakeActions = require('./features/Cake/cakeSlice').CakeActions

const IceCreamActions = require('./features/IceCream/IceCreamSlice').IceCreamActions


// console.log("initial state",store.getState())

const unsubscribe = store.subscribe(()=>{
    // console.log("updated State",store.getState())
})

store.dispatch(cakeActions.cakeOrdered())
store.dispatch(cakeActions.cakeOrdered())
store.dispatch(cakeActions.cakeOrdered())
store.dispatch(cakeActions.restockCakes(3))
store.dispatch(IceCreamActions.orderIceCream())
store.dispatch(IceCreamActions.orderIceCream())
store.dispatch(IceCreamActions.orderIceCream())
store.dispatch(IceCreamActions.restockIceCream(3))
unsubscribe()