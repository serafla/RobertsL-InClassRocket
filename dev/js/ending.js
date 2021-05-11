import { gsap } from "gsap";
import { Power4 } from "gsap/all";

export let endingTL = gsap.timeline();


endingTL.to("#space-ship",{y:"-=400", scale: 3, ease: Power4, duration: 2, rotation: 120, onStart:controlFlames}, "beans")
.to("#moon", {y:"+=200", scale: 0.5, duration: 2, alpha: 0}, "beans")
.to("#space-ship", {y:"+=800", scale: 1, duration: 1.25, rotation: 400}, "pork")
.to("#moon", {y:"-=800", x:"+=300", scale: 20, duration: 1.25, alpha: 1}, "pork")
.to("#space-ship", {y:"-=1000", x:"-=600", duration: 5, rotation: 200, alpha: 0, delay: 1}, "mars")


export let flamesTL = gsap.timeline({paused:true});

flamesTL.to("#left-blue",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
.to("#left-dark-blue",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")
.to("#right-blue",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
.to("#right-dark-blue",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")


function controlFlames(){
    gsap.set(".flames",{display:"block"});
    flamesTL.play()
}