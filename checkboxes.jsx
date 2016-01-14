import ReactDOM from 'react-dom';
import React from 'react';

/*
const CheckBoxList = React.createClass({
	render: function() {
		return (
			<div>
				<h2>{this.props.followUpTitle}</h2>
				<ul>
					{this.props.followUpBoxes.map(function (box) {
						var type = "checkbox";
						if (box.boxType) type=box.boxType;

						return (
							<CheckBox
								id={box.boxID}
								label={box.boxLabel}
								name={box.boxName}
								followUpTitle={box.followUpTitle}
								followUpBoxes={box.followUpBoxes}
								type={type} />
						)
					})}
				</ul>
			</div>
	)}
});
*/

const CheckBox = React.createClass({
	getDefaultProps: function() {
		return {
		 type: "checkbox" 
		};
	},
	render: function() {
		var divID="div-".concat(this.props.id);
		return (
			<div id={divID}>
				{this.props.id}
				<input 
					type={this.props.type}
					name={this.props.name}
					value={this.props.boxName}
					checked={this.isSelected}
					onChange={this.handleChange} />
				{this.props.label}
			</div>
	)}
});


const procedureMarkup = (	
	<ul>
		<li>
			<CheckBox id="8.1" label="Call Subcommittee Chair" name="call_subcommittee_chair" />
		</li>
		<li>
			<CheckBox id="8.2" label="Call THN to cross-check the names (6223856)" name="call_thn_to_cross_check" />	
				Had any name come up before?
				<CheckBox id="" label="No" name="no_repeat" />
				<CheckBox id="" label="Yes" name="yes_repeat" />
				<CheckBox id="" type="text" label="If yes, write # from the table above" name="name_repeat" />
		</li>
		<li>
			<CheckBox id="8.3" label="Scan and submit to THN the same day" name="scan_and_submit_same_day" />
		</li>
	</ul>
);

const typeInterceptMarkup = (
	<ul>
		<li>
			<CheckBox id="9.1" label="Gulf Countries" name="gulf_countries" />
		</li>
		<li>
			<CheckBox id="9.3" label="Unsafe Migration" name="unsafe_migration" />
		</li>
		<li>
			<CheckBox id="9.4" label="Circus" name="circus" />
		</li>
		<li>
			<CheckBox id="9.5" label="Runaway" name="runaway" />
		</li>
		<li>
			<CheckBox id="9.6" label="Was any trafficker taken into police custody?" name="police_custody" />
			<CheckBox id="" type="text" label="If yes, write # from the table above" name="name_custody" />
		</li>
		<li>
			9.7 How sure are you that it was trafficking case?
			Rate from 1-5 (1 = not at all sure, 5 = absolutely sure)<select id="how_sure">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
		</li>
	</ul>
);

React.render(typeInterceptMarkup, document.getElementById("TypeIntercept"));
React.render(procedureMarkup, document.getElementById("Procedures"));