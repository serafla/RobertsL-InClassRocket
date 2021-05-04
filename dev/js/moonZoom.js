import { gsap } from "gsap";

gsap.set("#moon",{transformOrigin:"center"});

// hide moon elements
gsap.set(".moon-things",{display:"none"});

export let moonZoomInTL = gsap.timeline();
moonZoomInTL.fromTo("#moon",{alpha:0, scale:0.25},{alpha:1, duration:4, scale:14, y:"+=1200", x:"+=300",ease:"none"})