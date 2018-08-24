/* globals $ */
import React from 'react';

export default class BusinessCard extends React.Component {

    render() {
        return (
        	<section className="nav-section">
				<nav>
					<div className="nav-wrapper">
						<a href="#!" className="brand-logo">Mayuk Agarwal</a>
						<a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
						<ul className="right hide-on-med-and-down">
							<li><a href="sass.html">Sass</a></li>
							<li><a href="badges.html">Components</a></li>
							<li><a href="collapsible.html">Javascript</a></li>
						</ul>
					</div>
				</nav>
				<ul className="sidenav" id="mobile-demo">
					<li><a href="sass.html">Sass</a></li>
					<li><a href="badges.html">Components</a></li>
					<li><a href="collapsible.html">Javascript</a></li>
				</ul>
			</section>
        );
    }
}