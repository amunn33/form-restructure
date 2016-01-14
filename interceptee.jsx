import React from 'react';
import ReactDOM from 'react-dom';

const Interceptee = React.createClass({
	render: function() {
		return (
			<div>
				<select>
					<option value="-">-</option>
					<option value="v">V</option>
					<option value="t">T</option>
				</select>
				<input type="text" name="full_name" />
				<select>
					<option value="-">-</option>
					<option value="m">M</option>
					<option value="f">F</option>
				</select>
				<input type="number" name="age" />
				<input type="text" name="add1" />
				<input type="text" name="add2" />
				<input type="text" name="phone_contact" />
				<input type="text" name="relation" />
			</div>
		)
	}
});



const intercepteeMarkup = (	
	<ul>
		<li>
			<Interceptee />
		</li>
		<li>
			<Interceptee />
		</li>
		<li>
			<Interceptee />
		</li>
		<li>
			<Interceptee />
		</li>
		<li>
			<Interceptee />
		</li>
		<li>
			<Interceptee />
		</li>
		<li>
			<Interceptee />
		</li>
		<li>
			<Interceptee />
		</li>
		<li>
			<Interceptee />
		</li>
		<li>
			<Interceptee />
		</li>
	</ul>
);


React.render(intercepteeMarkup, document.getElementById("Interceptees"));
