const configurestore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/Cake/cakeSlice')
const IceCreamReducer = require('../features/IceCream/IceCreamSlice')

const logger = reduxLogger.createLogger()

const store = configurestore({
    reducer:{
        cake:cakeReducer,
        IceCream:IceCreamReducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})

module.exports = store