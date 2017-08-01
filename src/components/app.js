import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import List from '../routes/list';
import Article from '../routes/article';

// import Home from 'async!./home';
// import Profile from 'async!./profile';
export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/profile" />
					<Profile path="/dashboard" user="me" />
					<Profile path="/dashboard/:user" />
					<List path="/" />
					<Article path="/article" />
				</Router>
			</div>
		);
	}
}
