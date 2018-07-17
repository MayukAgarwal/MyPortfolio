/* globals $ */
import React from 'react';

export default class BusinessCard extends React.Component {
  
	constructor(props) {
		super(props);
	}
		
    render() {
        return (
	        <section>
	        	<div className="width-100-percent flex-row flex-center" id="business-card-front">
	        		<div className="width-100-percent row">
	        			<div className="col s12 m6 l6 offset-l3 offset-m3 flex-row flex-center">
	        				<div className="relative business-card">
	        					<div className="absolute white-text business-card-title">
	        						<span className="">Mayuk Agarwal.</span>
	        					</div>
	        				</div>
	        			</div>
	        		</div>
	        	</div>
	        	<div className="width-100-percent flex-row flex-center" id="business-card-back">
	        		<div className="width-100-percent row">
	        			<div className="col s12 m6 l6 offset-l3 offset-m3 flex-row flex-center">
	        				<div className="relative business-card">
	        					<div className="absolute white-text business-card-details flex-column">
	        						<span>mayukagarwal@gmail.com</span>
	        						<span>+91 8947900747</span>
	        						<div className="flex-row flex-end business-card-icons">
	        							<a href="https://www.linkedin.com/in/mayuk-agarwal/" target="_blank"><i className="fab fa-linkedin white-text"></i></a>
	        						</div>
	        					</div>
	        				</div>
	        			</div>
	        		</div>
	        	</div>
	        </section>
        );
    }
}