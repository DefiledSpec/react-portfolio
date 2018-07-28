import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
		<div>
			<Header siteName='Jesse Harrah' />
			<main>
				{ this.props.children }
			</main>
			<Footer />
		</div>
    );
  }
}

export default App;
