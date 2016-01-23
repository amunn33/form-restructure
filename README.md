# form-restructure
ReactRedux branch is currently broken as it is in the process of being overhauled from pure React to React with Redux.

Webpack-dev-server does not currently run but the current setup includes a main Redux files with failed functionality.

My testing was done only with a small section of the Question component group (src/index.jsx shows markup I was attempting to render). You can look through the Question component (src/components/question.jsx) to see how the onChange function creates actions (specifically Answer and RedFlag).

Actions are held in src/action_creators which is sent to reducer in src/reducer to make changes to state.

