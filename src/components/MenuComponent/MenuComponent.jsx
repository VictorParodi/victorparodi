import React from 'react';
import { Grid } from 'semantic-ui-react';
import MobileMenu from './../MobileMenu/MobileMenu';
import './MenuComponent.css';

function MenuComponent({ isMobile }) {
	const component = isMobile ? <MobileMenu /> : <h1>Desktop Menu</h1>;

	return (
		<Grid container className="menu-wrapper">
			<Grid.Row>
				<Grid.Column width={16}>
					{component}
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}

export default MenuComponent;