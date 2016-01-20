import React from 'react';
import ReactDOM from 'react-dom';

const IntercepteeTable = React.createClass({
	render: function() {
		return (
			<table className="table table-bordered interceptee-form" id="intercepteesTable" data-placement="left">
				<thead>
					<tr>
						<th> V </th>
						<th> Full Name </th>
						<th> F </th>
						<th> Age </th>
						<th> Address 1 </th>
						<th> Address 2 </th>
						<th> Phone Contact </th>
						<th> Relation to... </th>
					</tr>
				</thead>
				<tbody>
					{this.props.children}
				</tbody>
			</table>
		)		
	}
});

const Interceptee = React.createClass({
	render: function() {
		return (
			<tr>
				<td>
					<select>
						<option value="">------</option>
						<option value="v">Victim</option>
						<option value="t">Trafficker</option>
					</select>
				</td>
				<td>
					<input type="text" name="full_name" />
				</td>
				<td>
					<select>
						<option value="-">-</option>
						<option value="m">M</option>
						<option value="f">F</option>
					</select>
				</td>
				<td>
					<input type="number" name="age" />
				</td>
				<td>
					<input type="text" name="add1" />
				</td>
				<td>
					<input type="text" name="add2" />
				</td>
				<td>
					<input type="text" name="phone_contact" />
				</td>
				<td>
					<input type="text" name="relation" />
				</td>
			</tr>
		)
	}
});



const intercepteeMarkup = (	
	<IntercepteeTable>
		<Interceptee />
		<Interceptee />
		<Interceptee />
		<Interceptee />
		<Interceptee />
		<Interceptee />
		<Interceptee />
		<Interceptee />
		<Interceptee />
		<Interceptee />
	</IntercepteeTable>
);


React.render(intercepteeMarkup, document.getElementById("Interceptees"));
