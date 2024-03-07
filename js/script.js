import { SlideNav } from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next'); // add arrow navigation buttons to the slideshow, passing in their

slide.addControl();