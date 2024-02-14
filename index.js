//Action creators
const increment = () => ({ type: "INCREMENT" }); //increment action - without payload
const decrement = () => ({ type: "DECREMENT" }); //decrement action - without payload
const double = () => ({ type: "DOUBLE" });
const half = () => ({ type: "HALF" });
// const win = () => ({ type: 'WIN'});

const countReducer = (state = { count: 0, message: "" }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        message: "",
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        message: "",
      };
    case "DOUBLE":
      const doubledCount = state.count * 2;
      return {
        ...state,
        count: doubledCount >= Infinity ? Infinity : doubledCount,
        message: doubledCount >= Infinity ? "You Won! You smart bastard" : "",
      };
    case "HALF":
      return {
        ...state,
        count: state.count / 2,
        message: "",
      };
    default:
      return state;
  }
};

//Store
const store = Redux.createStore(countReducer);

//update html
function render() {
  const { count, message } = store.getState();
  document.getElementById(
    "value"
  ).innerHTML = `${count}<br> <h1>${message}</h1>`;
}

//Subscribe to changes, ie callback function render () is called when store is updated
store.subscribe(render);
