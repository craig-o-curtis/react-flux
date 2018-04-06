import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ForumHeader.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class ForumHeader extends Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render() {
		return (
			<header className="ForumHeader">
				<Navbar color="faded" light>
					<NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink href="/components/">Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		);
	}
}
Navbar.propTypes = {
	light: PropTypes.bool,
	dark: PropTypes.bool,
	fixed: PropTypes.string,
	color: PropTypes.string,
	role: PropTypes.string,
	expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	// pass in custom element to use
}

export default ForumHeader;


