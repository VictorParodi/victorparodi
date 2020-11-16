import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import './DesktopMenu.css';

function MobileMenu() {
	return (
		<Grid verticalAlign='middle' className="desktop-menu">
			<Grid.Row>
				<Grid.Column width={12}>
					<h1 className="desktop-menu__title">
						Victor <span>Parodi</span>
					</h1>
				</Grid.Column>

				<Grid.Column width={4} className="desktop-menu__list">
					<Menu text className="list__wrapper">
						<Menu.Item className="list__item" name="Inicio" />
						<Menu.Item className="list__item" name="Blog" />
						<Menu.Item className="list__item" name="Recursos" />
					</Menu>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}

export default MobileMenu;