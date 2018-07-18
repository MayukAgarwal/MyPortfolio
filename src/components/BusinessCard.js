/* globals $ */
import React from 'react';
import {TweenLite, TweenMax, Elastic } from 'gsap'

export default class BusinessCard extends React.Component {
  
	constructor(props) {
		super(props);
		this.flipCard = this.flipCard.bind(this);
		this.resetCard = this.resetCard.bind(this);
	}

	componentDidMount(){
		TweenLite.set(".cardContainer", {perspective:400});
		TweenLite.set(".back", {rotationX:180});
		TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});
	}

	flipCard(){
		TweenLite.to($(".cardWrapper"), 2, {
			rotationX:-180, 
			transformOrigin:"left 157.5px", 
			transformStyle:"preserve-3d", 
			ease:"Back.easeInOut"
		});
    	TweenLite.to($(".cardWrapper"), 2, {
    		rotationX:-360, 
    		transformOrigin:"left 157.5px", 
    		transformStyle:"preserve-3d", 
    		ease:"Back.easeInOut", 
    		delay:5,
    		onComplete:this.resetCard()
    	});
	}

	resetCard(){
		TweenLite.set($(".cardWrapper"), {rotationX:0});
	}

    render() {
        return (
	        <section className="business-card-section">
	        	<div className="width-100-percent flex-row flex-center relative cardContainer" onClick={this.flipCard}>
	        		<div className="width-100-percent row cardWrapper">
	        			<div className="col s12 m6 l6 offset-l3 offset-m3 flex-row flex-center absolute front">
	        				<div className="relative business-card">
	        					<div className="absolute white-text business-card-title">
	        						<span className="">Mayuk Agarwal.</span>
	        					</div>
	        				</div>
	        			</div>
	        			<div className="col s12 m6 l6 offset-l3 offset-m3 flex-row flex-center absolute back">
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