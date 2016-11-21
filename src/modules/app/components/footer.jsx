import React from 'react';

import Nav from 'modules/app/components/nav';

const Footer = (p) => {
	console.log('Footer props -- ', p);

	return (
		<footer>
			<Nav
				className="nav-footer"
				{...p}
			/>
			<div id="footer_content">
				<a className="link" href="https://augur.net" target="_blank" rel="noopener noreferrer" >About</a>
				<a className="link" href="http://augur.link/augur-beta-ToS-v2.pdf" target="_blank" rel="noopener noreferrer" >Terms of Service</a>
			</div>
		</footer>
	);
};

export default Footer;
