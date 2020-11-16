import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import MenuComponent from './../MenuComponent/MenuComponent';
import picture from './../../assets/dev2.png';
import './Header.css';

function Header() {
	const height = window.screen.height;
	const width = window.screen.width;
	const style = { height: `${height}px` };
	const isMobile = width < 1024 || false;

	return (
		<section className="header" style={style}>
			<MenuComponent isMobile={isMobile} />

			<Grid container className="header-top" verticalAlign='middle'>
				<Grid.Row>
					<Grid.Column mobile={16} tablet={16} computer={6}>
						<Grid.Row>
							<Grid.Column>
								<h2 className="header-top__title">Desarrollador Web</h2>
							</Grid.Column>

							<Grid.Column>
								<p className="header-top__text">
									Soluciones web y móviles de calidad mundial, ajustadas a las necesidades de tu negocio.
									Da el primer paso hacia la transformación digital.
								</p>
							</Grid.Column>

							<Grid.Column>
								<Button color="yellow">CONTÁCTO</Button>
							</Grid.Column>
						</Grid.Row>
					</Grid.Column>

					<Grid.Column
						mobile={16}
						tablet={16}
						computer={10}
						floated='right'
						className="header-top__image"
					>
						<img src={picture} alt="Dev" />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</section>
	);
}

export default Header;