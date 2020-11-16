import React from 'react';
import MenuComponent from './../MenuComponent/MenuComponent';
import './Header.css';

function Header() {
	return (
		<section className="header">
			<MenuComponent isMobile={true} />
		</section>
	);
}

export default Header;