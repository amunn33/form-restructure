import ReactDOM from 'react-dom';
import React from 'react';

const CheckBoxGroup = React.createClass({
	render: function() {
		return (
			<div id={this.props.groupID} className="checkboxGroup">
				<h3>{this.props.title}</h3>
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
			<div id={divID} className="checkbox">
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

const topBoxMarkup = (
	<CheckBoxGroup groupID="topBox" title="">
		<CheckBox id="IRF Number" label="" name="irf_number" type="text"/>
		<CheckBox id="Date/Time" label="" name="date_time" type="date"/>
		<CheckBox id="# of victims" label="" name="number_victims" type="text"/>
		<CheckBox id="# of traffickers" label="" name="number_traffickers" type="text"/>
		<CheckBox id="Location" label="" name="location" type="text"/>
		<CheckBox id="Staff Name" label="" name="staff_name" type="text"/>
	</CheckBoxGroup>
);

const familyMemberTalkedToMarkup = (
	<CheckBoxGroup groupID="familyMember" title="Which family member did you talk to?">
		<CheckBox id="4.1" label="Own brother" name="own_brother" />
		<CheckBox id="4.2" label="Own sister" name="own_sister" />
		<CheckBox id="4.3" label="Own father" name="own_father" />
		<CheckBox id="4.4" label="Own mother" name="own_mother" />
		<CheckBox id="4.5" label="Own grandparent" name="own_grandparent" />
		<CheckBox id="4.6" label="Own aunt / uncle" name="own_aunt_uncle" />
		<CheckBox id="4.7" label="Other" name="other_family" type="text" />
	</CheckBoxGroup>
)

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
		<CheckBox id="6.9" label="Other" name="contact_other" type="text" />
		<CheckBoxGroup groupID="payForInformation" title="Did you pay this contact for the information?">
			<CheckBox id="6.10" label="Yes" name="paid_contact_for_info" />
			<CheckBox id="6.11" label="No" name="did_not_pay_contact_for_info" />
			<CheckBox id="How much?" label="" name="amout_paid_for_info" type="text" />
		</CheckBoxGroup>
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

React.render(familyMemberTalkedToMarkup, document.getElementById("FamilyTalkedTo"));
React.render(topBoxMarkup, document.getElementById("TopBox"));
React.render(contactMarkup, document.getElementById("Contact"));
React.render(typeInterceptMarkup, document.getElementById("TypeIntercept"));
React.render(procedureMarkup, document.getElementById("Procedures"));