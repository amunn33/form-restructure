import {List, Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function checkAnswer(state, answer) {
  const currentAnswerState = state.get(answer];
  const currentRedFlagsState = state.get('redFlags').toArray();
  console.log("Current answer state: ", currentAnswerState);
  console.log("Current red flag state: ", currentRedFlagsState);
  if (currentAnswerState != ""){
  	return state.set(answer, List(""));
  }
  else return state.set(answer, List("checked"));
}

function checkRedFlag(state, redFlag) {
  const currentAnswerState = state.get(redFlag);
  const currentRedFlagsState = state.get('alone');;
  console.log("Current answer state: ", currentAnswerState);
  console.log("Current red flag state: ", currentRedFlagsState);
  if (currentRedFlagsState != ""){
  	return state.set(redFlag, List(""));
  }
  else return state.set(redFlag, List("checked"));
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'CHECK_ANSWER':
    return checkAnswer(state, action.answer);
  }
  case 'CHECK_RED_FLAG':
    return checkRedFlag(state, action.redFlag);
  }
  return state;
}
/*
How I want to set up the state
{
	alone: "",
	redFlags = [
		is_meeting_someone_across_border: "",
		meeting_someone_seen_in_nepal: "",
		was_travelling_with_someone_not_with_her: "",
	]
}
*/