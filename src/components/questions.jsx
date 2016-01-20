import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export const Question = React.createClass({
	render: function() {
		return (
			<div className="question">
				<h1>{this.props.text}</h1>
				<h3>{this.props.description}</h3>
				{this.props.children}
			</div>
	)}
});


// This looks eerily similar to redflag
export const Answer = React.createClass({
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
				{this.props.children}
			</div>
	)}
});

export const Action = React.createClass({
	render: function() {
		return (
			<div className="action">
				{this.props.txt}
				{this.props.children}
			</div>
	)}
});

export const RedFlag = React.createClass({
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

export const GreenLightList = React.createClass({
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

export const questionMarkup = (
	<Question text="Who is in the group?" description="">
		<Answer answerID="1.1" val="alone" txt="Alone">
			<Action txt="Are you meeting someone in India?">
				<RedFlag flagID="3.3" weight={30} val="is_meeting_someone_across_border" txt="Is meeting someone just across the border" />
				<RedFlag flagID="3.4" weight={20} val="meeting_someone_seen_in_nepal" txt="Meeting some she's seen in Nepal in the last month" />
			</Action>
			<Action txt="Was she travelling with someone earlier?">
				<RedFlag flagID="3.5" weight={40} val="was_travelling_with_someone_not_with_her" txt="Was travelling with someone not with her" />
			</Action>
		</Answer>
		<Answer answerID="1.2" val="husband_wife" txt="Husband/Wife" >
			<RedFlag flagID="3.2" weight={45} val="wife_is_under_18" txt="Wife is under 18" />
			<Action txt="Ask when she was married">
				<RedFlag flagID="3.6" weight={15} val="married_past_2_weeks" txt="Married in the past 2 weeks" />
				<RedFlag flagID="3.7" weight={10} val="married_past_2_8_weeks" txt="Married in the past 2-8 weeks" />
			</Action>
			<Action txt="Ask when they met">
				<RedFlag flagID="3.8" weight={20} val="less_than_2_week_eloping" txt="Less than 2 weeks before eloping" />
				<RedFlag flagID="3.9" weight={15} val="2_12_weeks_before_eloping" txt="2-12 weeks before eloping" />
			</Action>
		</Answer>		
		<Answer answerID="1.2" val="own_relative" txt="Own brother, sister / relative/Wife">
			<Action txt="Check citizenship cards">
				<RedFlag flagID="3.10" weight={50} val="caste_not_same_as_relative" txt="Caste not same as alleged relative" />
			</Action>
		</Answer>				
	</Question>

);	

React.render(questionMarkup, document.getElementById('Questions'));
