import { legacy_createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ActionType = {
  PLUS: "PLUS",
  MINUS: "MINUS",
}

number.innerText = 0;

function countModifier(count = 0, action) {
  switch (action.type) {
    case ActionType.PLUS:
      return ++count;
    case ActionType.MINUS:
      return --count;
    default:
      return count;
  }  
}
const countStore = legacy_createStore(countModifier);

function handlePlus() {
  countStore.dispatch({type: ActionType.PLUS});
}

function handleMinus() {
  countStore.dispatch({type: ActionType.MINUS});
}

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);



function onChange() {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange)

