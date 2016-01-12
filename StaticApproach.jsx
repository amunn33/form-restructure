var Question = React.createClass({
	render: function() {
		return (
			<div className="question">
				<h1>{this.props.text}</h1>
				<h3>{this.props.description}</h3>
			</div>
	)}
});


var RedFlag = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.flagID}
				<input 
					type="checkbox"
					name={this.props.boxName}
					value={this.props.val}
					checked={this.isSelected}
					onChange={this.handleChange} />
				<span className="redFlag">
					{this.props.weight}
					{this.props.txt}
				</span>
			</div>
	)}
});

// This looks eerily similar to redflag
var Answer = React.createClass({
	getInitialState: function() {
		return {isSelected: false}
	},
	handleChange: function() {
		this.setState({isSelected: !this.state.isSelected})
	},
	render: function() {
		return (
			<div>
				{this.props.answerID}
				<input 
					type="checkbox"
					name={this.props.boxName}
					value={this.props.val}
					checked={this.isSelected}
					onChange={this.handleChange} />
				{this.props.txt}
			</div>
	)}
});


var Action = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.txt}
				<RedFlagList flags={this.props.flags} />
				<GreenLightList lights={this.props.lights} />
			</div>
	)}
});

var GreenLightList = React.createClass({
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

