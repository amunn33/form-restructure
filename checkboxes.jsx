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

const CheckBoxGroup = React.createClass({
	render: function() {
		return (
			<div id={this.props.groupID} class="checkboxGroup">
				{this.props.title}
				{this.props.children}
			</div>
		)
	}
});

const CheckBox = React.createClass({
	getDefaultProps: function() {
		return {
		 type: "checkbox" 
		};
	},
	render: function() {
		var divID="div-".concat(this.props.id);
		return (
			<div id={divID} class="checkbox">
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


const contactMarkup = (
	<CheckBoxGroup groupID="contact" title="Contact">
		<CheckBox id="6.1" label="Hotel Owner" name="contact_hotel_owner" />
		<CheckBox id="6.2" label="Rickshaw driver" name="contact_rickshaw_driver" />
		<CheckBox id="6.3" label="Taxi Driver" name="contact_taxi_driver" />
		<CheckBox id="6.4" label="Bus Driver" name="contact_bus_driver" />
		<CheckBox id="6.5" label="Church Member" name="contact_church_member" />
		<CheckBox id="6.6" label="Other NGO" name="contact_other_ngo" />
		<CheckBox id="6.7" label="Police" name="contact_police" />
		<CheckBox id="6.8" label="Subcomittee Member" name="contact_subcomittee_member" />
		<CheckBox id="6.9" label="Other" name="contat_other" type="text" />
	</CheckBoxGroup>
);

const procedureMarkup = (	
	<CheckBoxGroup groupID="procedures" title="Procedures">
			<CheckBox id="8.1" label="Call Subcommittee Chair" name="call_subcommittee_chair" />
		
			<CheckBox id="8.2" label="Call THN to cross-check the names (6223856)" name="call_thn_to_cross_check" />	
			<CheckBoxGroup groupID="name-check" title="Had any name come up before?">
				<CheckBox id="" label="No" name="no_repeat" />
				<CheckBox id="" label="Yes" name="yes_repeat" />
				<CheckBox id="" type="text" label="If yes, write # from the table above" name="name_repeat" />
			</CheckBoxGroup>
			<CheckBox id="8.3" label="Scan and submit to THN the same day" name="scan_and_submit_same_day" />
	</CheckBoxGroup>
);

const typeInterceptMarkup = (
	<CheckBoxGroup groupID="type-intercept" title="Type of Intercept">
		<CheckBox id="9.1" label="Gulf Countries" name="gulf_countries" />
		<CheckBox id="9.3" label="Unsafe Migration" name="unsafe_migration" />
		<CheckBox id="9.4" label="Circus" name="circus" />
		<CheckBox id="9.5" label="Runaway" name="runaway" />
		
		<CheckBox id="9.6" type="text" label="Was any trafficker taken into police custody? If yes, write # from the table above" name="name_custody" />
		9.7 How sure are you that it was trafficking case?
		Rate from 1-5 (1 = not at all sure, 5 = absolutely sure)<select id="how_sure">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
		</select>
	</CheckBoxGroup>
);

React.render(contactMarkup, document.getElementById("Contact"))
React.render(typeInterceptMarkup, document.getElementById("TypeIntercept"));
React.render(procedureMarkup, document.getElementById("Procedures"));