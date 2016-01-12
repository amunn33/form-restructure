var QuestionList = React.createClass({
	
	getDataFromServer: function(){
		return [
		    {
		      text: "Who is in the group?",
		      description: "",
		      flags: [
		        {
		          flagID: "3.1",
		          weight: 40,
		          boxName: "girl_appears_drugged",
		          val: "girls_appears_drugged",
		          txt: "Girl appears drugged or drowsy"
		        }
		      ],
		      answers: [
		        {
		          answerId: "1.1",
		          boxName: "alone",
		          val: "alone",
		          txt: "Alone",
		          flags: [],
		          actions: [
		            {
		              txt: "Are you meeting someone in India?",
		              flags: [
		                {
		                  flagID: "3.3",
		                  weight: 30,
		                  boxName: "is_meeting_someone_across_border",
		                  val: "is_meeting_someone_across_border",
		                  txt: "Is meeting someone just across the border"
		                },
		                {
		                  flagID: "3.4",
		                  weight: 20,
		                  boxName: "meeting_someone_seen_in_nepal",
		                  val: "meeting_someone_seen_in_nepal",
		                  txt: "Meeting some she's seen in Nepal in the last month"
		                }
		              ],
		              lights: []
		            },
		            {
		              txt: "Was she travelling with someone earlier?",
		              flags: [
		                {
		                  flagID: "3.5",
		                  weight: 40,
		                  boxName: "was_travelling_with_someone_not_with_her",
		                  val: "was_travelling_with_someone_not_with_her",
		                  txt: "Was travelling with someone not with her"
		                }
		              ],
		              lights: []
		            }
		          ]
		        },
		        {
		          answerId: "1.2",
		          boxName: "husband_wife",
		          val: "husband_wife",
		          txt: "Husband/Wife",
		          flags: [
		            {
		              flagID: "3.2",
		              weight: 45,
		              boxName: "wife_is_under_18",
		              val: "wife_is_under_18",
		              txt: "Wife is under 18"
		            }
		          ],
		          actions: [
		            {
		              txt: "Ask when she was married",
		              flags: [
		                {
		                  flagID: "3.6",
		                  weight: 15,
		                  boxName: "married_past_2_weeks",
		                  val: "married_past_2_weeks",
		                  txt: "Married in the past 2 weeks"
		                },
		                {
		                  flagID: "3.7",
		                  weight: 10,
		                  boxName: "married_in_past_2_8_weeks",
		                  val: "married_in_past_2_8_weeks",
		                  txt: "Married within the past 2-8 weeks"
		                }
		              ],
		              lights: []
		            },
		            {
		              txt: "Ask when they met",
		              flags: [
		                {
		                  flagID: "3.8",
		                  weight: 20,
		                  boxName: "less_than_2_week_eloping",
		                  val: "less_than_2_week_eloping",
		                  txt: "Less than 2 weeks before eloping"
		                },
		                {
		                  flagID: "3.9",
		                  weight: 15,
		                  boxName: "2_12_weeks_before_eloping",
		                  val: "2_12_weeks_before_eloping",
		                  txt: "2-12 weeks before eloping"
		                }
		              ],
		              lights: []
		            }
		          ]
		        },
		        {
		          answerId: "1.3",
		          boxName: "own_relative",
		          val: "own_relative",
		          txt: "Own brother, sister / relative",
		          flags: [],
		          actions: [
		            {
		              txt: "Check citizenship cards",
		              flags: [
		                {
		                  flagID: "3.10",
		                  weight: 50,
		                  boxName: "caste_not_same_as_relative",
		                  val: "caste_not_same_as_relative",
		                  txt: "Caste not same as alleged relative"
		                }
		              ],
		              lights: []
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

var Question = React.createClass({
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


var RedFlagList = React.createClass({
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

var RedFlag = React.createClass({
	getInitialState: function() {
		return {isSelected: true}
	},
	handleChange: function() {
		this.setState({isSelected: !this.state.isSelected})
		// Check parent Answer boxes?
	},
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


var AnswerList = React.createClass({
	render: function() {
		return (
			<ul>
				{this.props.answers.map(function (a){
					return (
						<Answer
							answerID={a.answerID}
							boxName={a.boxName}
							val={a.val}
							txt={a.txt}
							flags={a.flags}
							actions={a.actions} />
					)
				})}
			</ul>
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
				<RedFlagList flags={this.props.flags} />
				<ActionList actions={this.props.actions} />
			</div>
	)}
});

var ActionList = React.createClass({
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

var CheckBoxList = React.createClass({
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

var CheckBox = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.id}
				<input 
					type={this.props.type}
					name={this.props.name}
					value={this.props.boxName}
					checked={this.isSelected}
					onChange={this.handleChange} />
				{this.props.label}
				<CheckBoxList 
					followUpTitle={this.props.followUpTitle}
					followUpBoxes={this.props.followUpBoxes} />
			</div>
	)}
});

var checkBoxTitle = "Procedures";
var checkBoxes = 
	[{
		boxID: '8.1',
		boxLabel: 'Call Subcommittee Chair',
		boxName: 'call_subcommittee_chair',
		followUpTitle: '',
		followUpBoxes: []
	},
	{
		boxID: '8.2',
		boxLabel: 'Call THN to cross-check the names (6223856)',
		boxName: 'call_thn_to_cross_check',
		followUpTitle: 'Had any name come up before?',
		followUpBoxes: 
		[{
			boxID: '',
			boxLabel: 'No',
			boxName: 'name_has_not_come_up',
			followUpTitle:'',
			followUpBoxes: []
		},
		{
			boxID: '',
			boxLabel: 'Yes',
			boxName: 'name_has_come_up',
			followUpTitle:'',
			followUpBoxes: []
		},
		{
			boxID: '',
			boxLabel: 'If yes, write the # from the table above',
			boxName: 'trafficker_repeat',
			boxType: 'text',
			followUpTitle:'',
			followUpBoxes: []
		}]
	},
	{
		boxID: '8.3',
		boxLabel: 'Scan and submit to THN the same day',
		boxName: 'scan_and_submit_same_day',
		followUpTitle: '',
		followUpBoxes: []
	}];
	
// Can only render once, other divs get deleted
//React.render(<CheckBoxList followUpTitle={checkBoxTitle} followUpBoxes={checkBoxes} />, document.getElementById('Questions'));
React.render(<QuestionList/>, document.getElementById('Questions'));