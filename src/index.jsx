/**
 * Created by austin on 1/20/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer as myReducer from './reducer';
//import reducer as formReducer from 'redux-form';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import {Question, AnswerContainer, Action, RedFlagContainer, GreenLightList} from './components/questions';

require('./style.css');


const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);
//store.dispatch(setClientId(getClientId()));

const questionMarkup = (
	<Question text="Who is in the group?" description="">
		<AnswerContainer answerID="1.1" val="alone" txt="Alone">
			<Action txt="Are you meeting someone in India?">
				<RedFlagContainer flagID="3.3" weight={30} val="is_meeting_someone_across_border" txt="Is meeting someone just across the border" />
				<RedFlagContainer flagID="3.4" weight={20} val="meeting_someone_seen_in_nepal" txt="Meeting some she's seen in Nepal in the last month" />
			</Action>
			<Action txt="Was she travelling with someone earlier?">
				<RedFlagContainer flagID="3.5" weight={40} val="was_travelling_with_someone_not_with_her" txt="Was travelling with someone not with her" />
			</Action>
		</AnswerContainer>				
	</Question>
);


ReactDOM.render(
  questionMarkup,
  document.getElementById('Questions')
);
