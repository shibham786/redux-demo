const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const CAKE_ORDER = "CAKE_ORDER";
const RESTOCK_CAKE = "RESTOCK_CAKE";

const ICECREAM_ORDER = "ICECREAM_ORDER";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";

const Cakeinitial_State = {
  numOfCakes: 10,
};

const IceCreaminitial_State = {
    numOfIceCream: 20,
  };
//action creator mean function that return action obj which has type property

const cakeOrdered = () => {
  return {
    type: CAKE_ORDER,
    payload: 1,
  };
};

const RestockCake = (qty = 1) => {
  return {
    type: RESTOCK_CAKE,
    payload: qty,
  };
};


const IceCreamOrdered = () => {
    return {
      type: ICECREAM_ORDER,
      payload: 1,
    };
  };
  
  const RestockIceCream = (qty = 1) => {
    return {
      type: RESTOCK_ICECREAM,
      payload: qty,
    };
  };
  
//reducer specify how to state of application change in response to action sent to the store
// reducer is a function that takes state and action as argument and return new state of application
// (prevState,action) => newState

const Cakereducer = (state = Cakeinitial_State, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const IceCreamreducer = (state = IceCreaminitial_State, action) => {
    switch (action.type) {
      case ICECREAM_ORDER:
        return {
          ...state,
          numOfIceCream: state.numOfIceCream - action.payload,
        };
      case RESTOCK_ICECREAM:
        return {
          ...state,
          numOfIceCream: state.numOfIceCream + action.payload,
        };
      default:
        return state;
    }
  };
  
const store = createStore(combineReducer({}));

console.log("initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

//dispatch action

store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());
store.dispatch(RestockCake(3))

unsubscribe();

// after unsubscribe redux store dont notfiy that state updated
//store.dispatch(cakeOrdered());
