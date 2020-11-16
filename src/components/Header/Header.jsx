import React from 'react';
import { Grid } from 'semantic-ui-react';
import MenuComponent from './../MenuComponent/MenuComponent';
import picture from './../../assets/dev.png';
import './Header.css';

function Header() {
	return (
		<section className="header">
			<MenuComponent isMobile={true} />

			<Grid container className="header-top">
				<Grid.Row>
					<Grid.Column>
						<h2 className="header-top__title">Desarrollador Web</h2>
					</Grid.Column>

					<Grid.Column width={16}>
						<p className="header-top__text">
							Soluciones web y móviles de calidad mundial, ajustadas a las ncesidades de tu negocio.
						</p>
					</Grid.Column>

					<Grid.Column width={16}>
						<img src={picture} alt="Dev" />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</section>
	);
}

export default Header;