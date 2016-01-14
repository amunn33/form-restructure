import React from 'react';
import ReactDOM from 'react-dom';
/*
const QuestionList = React.createClass({
	
	getDataFromServer: function(){
		return [
		    {
		      
		            }
		          ]
		        }
		      ]
		    }
		  ];
	},

	render: function() {
		var data = this.getDataFromServer();

		var questions = data.map(function(q) {
			return <Question text={q.text} description={q.description} flags={q.flags} answers={q.answers}/>
		});

		return (
			<div className="question-list"> 
				{questions}
			</div>
	)}
});

const RedFlagList = React.createClass({
	render: function() {
		return (
			<ul>
				{this.props.flags.map(function (flag){
					return <RedFlag
						flagID={flag.flagID}
						weight={flag.weight}
						boxName={flag.boxName}
						val={flag.val}
						txt={flag.txt} />
				})}
			</ul>
	)}
});

const ActionList = React.createClass({
	render: function() {
		return (
			<ul>
				{this.props.actions.map(function (a) {
					return (
						<Action
							txt={a.txt}
							flags={a.flags}
							lights={a.lights} />
					)
				})}
			</ul>
	)}
});
*/

const Question = React.createClass({
	render: function() {
		return (
			<div className="question">
				<h1>{this.props.text}</h1>
				<h3>{this.props.description}</h3>
				<RedFlagList flags={this.props.flags} />
				<AnswerList answers={this.props.answers} />
			</div>
	)}
});

const RedFlag = React.createClass({
	getInitialState: function() {
		return {isSelected: true}
	},
	handleChange: function() {
		this.setState({isSelected: !this.state.isSelected})
		// Check parent Answer boxes?
	},
	render: function() {
		return (
			<div className="redFlag">
				{this.props.flagID}
				<input 
					type="checkbox"
					name={this.props.val}
					value={this.props.val}
					checked={this.isSelected}
					onChange={this.handleChange} />
				<span>
					{this.props.weight}
					{this.props.txt}
				</span>
			</div>
	)}
});


// This looks eerily similar to redflag
const Answer = React.createClass({
	getInitialState: function() {
		return {isSelected: false}
	},
	handleChange: function() {
		this.setState({isSelected: !this.state.isSelected})
	},
	render: function() {
		return (
			<div className="answer">
				{this.props.answerID}
				<input 
					type="checkbox"
					name={this.props.val}
					value={this.props.val}
					checked={this.isSelected}
					onChange={this.handleChange} />
				{this.props.txt}
			</div>
	)}
});

const Action = React.createClass({
	render: function() {
		return (
			<div className="action">
				{this.props.txt}
			</div>
	)}
});

const GreenLightList = React.createClass({
	render: function() {
		return (
			<ul>
				{this.props.lights.map(function (light) {
					return (
						<li>
							{light}
						</li>
					)
				})}
			</ul>
	)}
});

const questionMarkup = (
	<div>
	<p> Who is in the group? </p>
	<ul>
		<Answer answerID="1.1" val="alone" txt="Alone"/>
			<Action txt="Are you meeting someone in India?" />
				<RedFlag flagID="3.3" weight={30} val="is_meeting_someone_across_border" txt="Is meeting someone just across the border" />
				<RedFlag flagID="3.4" weight={20} val="meeting_someone_seen_in_nepal" txt="Meeting some she's seen in Nepal in the last month" />
			<Action txt="Was she travelling with someone earlier?" />
				<RedFlag flagID="3.5" weight={40} val="was_travelling_with_someone_not_with_her" txt="Was travelling with someone not with her" />
		<Answer answerID="1.2" val="husband_wife" txt="Husband/Wife" />
			<RedFlag flagID="3.2" weight={45} val="wife_is_under_18" txt="Wife is under 18" />
			<Action txt="Ask when she was married" />
				<RedFlag flagID="3.6" weight={15} val="married_past_2_weeks" txt="Married in the past 2 weeks" />
				<RedFlag flagID="3.7" weight={10} val="married_past_2_8_weeks" txt="Married in the past 2-8 weeks" />
			<Action txt="Ask when they met" />
				<RedFlag flagID="3.8" weight={20} val="less_than_2_week_eloping" txt="Less than 2 weeks before eloping" />
				<RedFlag flagID="3.9" weight={15} val="2_12_weeks_before_eloping" txt="2-12 weeks before eloping" />		
		<Answer answerID="1.2" val="own_relative" txt="Own brother, sister / relative/Wife" />
			<Action txt="Check citizenship cards" />
				<RedFlag flagID="3.10" weight={50} val="caste_not_same_as_relative" txt="Caste not same as alleged relative" />
				
	</ul>
	</div>

);	

React.render(questionMarkup, document.getElementById('Questions'));