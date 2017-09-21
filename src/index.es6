import $ from 'jquery';
import animatedHeadline from 'animated_headline';

// var $ = require('jquery');
// window.jQuery = $;

// window.jQuery = $;
// window.$ = $;

import {TweenMax} from "gsap";



    function component() {
        let element = document.createElement('div');

        let element2 = 'asdfs';


        // $('.animated-headline').addClass('asdf');
        $('.animated-headline').animatedHeadline();


        return element;
    }


document.body.appendChild(component());