import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export const Question = React.createClass({
	mixins: [PureRenderMixin],
	render: function() {	
		return (
			<div className="question">
				<h1>{this.props.text}</h1>
				<h3>{this.props.description}</h3>
				{this.props.children}
			</div>
	)}
});



export const Answer = React.createClass({
	mixins: [PureRenderMixin],
	isChecked: function() {
		return !!this.props.isSelected;
	},
	render: function() {
		return (
			<div className="answer">
				{this.props.answerID}
				<input 
					type="checkbox"
					name={this.props.val}
					value={this.props.val}
					checked={this.isChecked()}
					onChange={() => this.props.checkAnswer(this.props.val))} />
				{this.props.txt}
				{this.props.children}
			</div>
	)}
});


export const Action = React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return (
			<div className="action">
				{this.props.txt}
				{this.props.children}
			</div>
	)}
});

export const RedFlag = React.createClass({
	mixins: [PureRenderMixin],
	isChecked: function() {
		return !!this.props.isSelected;
	},
	render: function() {
		console.log("Red Flag List: ",redFlagsList);
		console.log("Question Is Selected: ", questionIsSelected);
		return (
			<div className="redFlag">
				{this.props.flagID}
				<input 
					type="checkbox"
					value={this.props.val}
					checked={this.isSelected}
					onChange={() => this.props.checkRedFlag(this.props.val))} />
				<span>
					{this.props.weight}
					{this.props.txt}
				</span>
			</div>
	)}
});

export const GreenLightList = React.createClass({
	mixins: [PureRenderMixin],
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

function mapStateToProps(state) {
  return {
    questionIsSelected: state.getIn(['question']),
    redFlagsList: state.getIn(['redFlags']),
  };
};


export const AnswerContainer = connect(
  mapStateToProps,
  actionCreators
)(Answer);


export const RedFlagContainer = connect(
  mapStateToProps,
  actionCreators
)(RedFlag);

	

React.render(questionMarkup, document.getElementById('Questions'));

/* 
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
*/