const redux = require("redux");
const applyMiddleware = redux.applyMiddleware
const createstore = redux.createStore;
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";

const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const InitialState = {
    loading:false,
    users:[],
    error:''
}

const fetchUsersRequested = ()=>{
    return {
        type:FETCH_USERS_REQUESTED
    }
}

const fetchUsersSucceded = (users)=>{
    return {
        type:FETCH_USERS_SUCCEEDED,
        payload:users
    }
}

const fetchUsersFailed = (error)=>{
    return {
        type:FETCH_USERS_FAILED,
        payload:error
    }
}

const Reducer = (state=InitialState,action)=>{

    switch(action.type){

        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILED:
            return {
                loading:false,
                users:[],
                error: action.payload
            }
    }

}

const fetchUsers = ()=>{
    return function(dispatch){
        dispatch(fetchUsersRequested())
        axios.get("https://jsonplaceholder.typicode.com/users").then(res =>{
            const users = res.data.map(user => user.id)
            dispatch(fetchUsersSucceded(users))
        }).catch((err)=>{
            dispatch(fetchUsersFailed(err.message))
        })

    }
}

const store = createstore(Reducer,applyMiddleware(thunkMiddleware))


store.subscribe(()=>{
    console.log("initial state",store.getState())
})

store.dispatch(fetchUsers())