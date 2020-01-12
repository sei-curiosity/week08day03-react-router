import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import PersonNames from './components/Names/PersonNames';
import AddPerson from './components/Names/AddPerson';
import PersonEmails from './components/Emails/PersonEmails';
import AddEmail from './components/Emails/AddEmail';
import PersonWebsites from './components/Websites/PersonWebsites';
import AddWebsite from './components/Websites/AddWebsite';


import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
	state = {
		data: [],
		names: [],
		emails: [],
		websites: []
	};

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				let data = res.data
				let dataNames = data.map((d) => {
					return	{id: d.id, name: d.name}})
				let dataEmails = data.map((d) => {
					return {id: d.id, email: d.email}})
				let dataWeb = data.map((d) => {
					return {id: d.id, website: d.website}})
				this.setState({
					data: data,
					names: dataNames,
					emails: dataEmails,
					websites: dataWeb})
			})
			.then(()=>{
				let check0 = this.state
				console.log(check0)
				})
	}

	// Delete Email
		delEmail = (id) => {
			axios
				.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
				.then((res) => {
					this.setState({
						emails: this.state.emails.filter((email) => email.id !== id)
					})}
				).then(()=>{
				let check1 = this.state
				console.log(check1)
				}
				)
		};

	// Delete Name
	delName = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				this.setState({
					names: this.state.names.filter((name) => name.id !== id)
				})}
			).then(()=>{
			let check1 = this.state
			console.log(check1)
			}
			)
	};

		// Delete Webite
		delWebsite = (id) => {
			axios
				.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
				.then((res) => {
					this.setState({
						websites: this.state.websites.filter((web) => web.id !== id)
					})}
				).then(()=>{
				let check1 = this.state
				console.log(check1)
				}
				)
		};

	// Add Name
	addName = (name) => {
		axios
			.post('https://jsonplaceholder.typicode.com/users', {
				name: name
			})
			.then((res) => {
				res.data.id = this.state.names[this.state.names.length-1].id + 1 //uuid.v4();
				this.setState({ names: [...this.state.names, res.data] });
			}).then(()=>{
				let check2 = this.state
				console.log(check2)
				})
	};

		// Add Email
		addEmail = (email) => {
			axios
				.post('https://jsonplaceholder.typicode.com/users', {
					email: email
				})
				.then((res) => {
					res.data.id = this.state.emails[this.state.emails.length-1].id + 1 //uuid.v4();
					this.setState({ emails: [...this.state.emails, res.data] });
				}).then(()=>{
					let check2 = this.state
					console.log(check2)
					})
		};

		// Add Website
		addWebsite = (website) => {
			axios
				.post('https://jsonplaceholder.typicode.com/users', {
					website: website
				})
				.then((res) => {
				res.data.id = this.state.websites[this.state.websites.length-1].id + 1//uuid.v4();
				this.setState({ websites: [...this.state.websites, res.data] });
				}).then(()=>{
				let check2 = this.state
				console.log(check2)
				})
		};

	render() {
		return (
			<Router>
				<div className='App'>
					<div className='container'>
						<Header />
						<Route exact path='/' render={(props) => (
								<React.Fragment>
									<AddPerson addPerson={this.addName} />
									<PersonNames names={this.state.names} delName={this.delName} />
								</React.Fragment>
							)}
						/>
						<Route exact path='/emails' render={(props) => (
								<React.Fragment>
									<AddEmail addEmail={this.addEmail} />
									<PersonEmails emails={this.state.emails} delEmail={this.delEmail} />
								</React.Fragment>
							)}
						/>
						<Route exact path='/websites' render={(props) => (
								<React.Fragment>
									<AddWebsite addWebsite={this.addWebsite} />
									<PersonWebsites websites={this.state.websites} delWebsite={this.delWebsite} />
								</React.Fragment>
							)}
						/>
						<Route path='/about' component={About} />
					</div>
				</div>
			</Router>
		);
		// return (
		// 		<div className='App'>
		// 			<div className='container'>
		// 						<React.Fragment>
		// 							<AddPerson addPerson={this.addName} />
		// 							<PersonNames names={this.state.names} delName={this.delName}/>
		// 						</React.Fragment>
		// 			</div>
		// 		</div>
		// );
	}
}

export default App;
