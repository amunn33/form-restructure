export function checkAnswer(answer) {
  return {
    type: 'CHECK_ANSWER',
    answer
  };
}

export function checkRedFlag(redFlag) {
  return {
    type: 'CHECK_RED_FLAG',
    redFlag
  };
}