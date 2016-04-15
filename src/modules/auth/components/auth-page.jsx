import React from 'react';

import SiteHeader from '../../site/components/site-header';
import AuthForm from '../../auth/components/auth-form';

module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		siteHeader: React.PropTypes.object,
		authForm: React.PropTypes.object
	},

	render: function() {
		var p = this.props;
		return (
	        <main className="page auth">
	            <SiteHeader { ...p.siteHeader } />

				<header className="page-header">
					<span className="big-line">Augur is a completely decentralized system</span> including user accounts.
					Your credentials never leave the browser, and you are responsible for remembering them and keeping them safe.
					<br />
					<b><i className="negative">It is impossible to recover your account if your credentials get lost!</i></b>
				</header>

	            <AuthForm
	                className="auth-form"
	                { ...p.authForm } />
	        </main>
	    );
	}
});