const redux = require("redux");
const immer = require('immer')
const produce = immer.produce
const createstore = redux.createStore


const UPDATE_STREET = 'UPDATE_STREET'


const InitialState = {
    name:'simba',
    Address:{
        Street:'aas pass mandir',
        city:'surat',
        State:'gujarat'
    }
}

const UpdateStreet = (street)=>{

    return {
        type:UPDATE_STREET,
        payload:street
    }

}

const Reducer = (state=InitialState,action)=>{
    switch(action.type){

        case UPDATE_STREET:
            // without immer we update nested state is hard
            // return{
            //     ...state,
            //     Address:{
            //         ...state.Address,
            //         Street:action.payload
            //     }
            // }

            return produce(state,(draft)=>{
                draft.Address.Street = action.payload
            })
        default :
            return state
    }

}

const store = createstore(Reducer)

console.log("Inital State",store.getState())

const Unsubscribe = store.subscribe(()=>{
    console.log("Updated State",store.getState())
})


store.dispatch(UpdateStreet("Godadara"))

Unsubscribe()