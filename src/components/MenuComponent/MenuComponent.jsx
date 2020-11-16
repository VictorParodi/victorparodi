import React from 'react';
import { Grid } from 'semantic-ui-react';
import MobileMenu from './../MobileMenu/MobileMenu';
import DesktopMenu from './../DesktopMenu/DesktopMenu';
import './MenuComponent.css';

function MenuComponent({ isMobile }) {
	const component = isMobile ? <MobileMenu /> : <DesktopMenu />;

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