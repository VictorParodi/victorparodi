import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import './MobileMenu.css';

function MobileMenu() {
	return (
		<Grid verticalAlign='middle' className="mobile-menu">
			<Grid.Row>
				<Grid.Column width={13}>
					<h1 className="mobile-menu__title">
						Victor <span>Parodi</span>
					</h1>
				</Grid.Column>

				<Grid.Column width={3}>
					<Icon
						name="bars"
						color="white"
						size="big"
					/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}

export default MobileMenu;