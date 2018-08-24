/* globals $ */
import $ from 'jquery';
import {TweenLite, Back } from 'gsap'


export function flipCard() {
	return (
        TweenLite.to($(".cardWrapper"), 2, {
			rotationX:-180, 
			transformOrigin:"left 157.5px", 
			transformStyle:"preserve-3d", 
			ease: Back.easeInOut.config(2)
		}),
    	TweenLite.to($(".cardWrapper"), 2, {
    		rotationX:-360, 
    		transformOrigin:"left 157.5px", 
    		transformStyle:"preserve-3d", 
    		ease: Back.easeInOut.config(2), 
    		delay:5,
    		onComplete: resetCard()
    	})
    );
}

export function resetCard(target){
    TweenLite.set(target, {rotationX:0});
}
