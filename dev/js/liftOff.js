import { gsap } from "gsap";

gsap.set("#space-ship",{transformOrigin:"center"});
gsap.set("#smoke-1",{transformOrigin:"center bottom"});
gsap.set("#smoke-1",{transformOrigin:"center bottom"});
// gsap.set("#smoke-3",{display:"none"});
// gsap.set(".smoke",{display:"none"});

export let liftOffTL = gsap.timeline();

liftOffTL.to("#space-ship",{duration:0.15, rotation:-10,ease:"none"})
        .to("#space-ship",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
        .to("#space-ship",{duration:0.15, rotation:0,ease:"none", onComplete:controlFlames})
        .from("#smoke-1",{duration:3.5, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
        .from("#smoke-2",{duration:4, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
        .to("#space-ship",{duration:5, y:"-=700", ease: "power3.in"},"upAndAway")
        .to("#clouds",{duration:5, y:"+=700", ease: "power3.in"},'upAndAway')
        .to("#front",{duration:5, y:"+=600", ease: "power3.in"},'upAndAway')
        .to("#middle",{duration:5, y:"+=500", ease: "power3.in"},'upAndAway')
        .from("#space",{duration:5,alpha:0, ease: "power3.in"},'upAndAway');


export let flamesTL = gsap.timeline({paused:true});

flamesTL.to("#left-blue",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
.to("#left-dark-blue",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")
.to("#right-blue",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
.to("#right-dark-blue",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")

function controlFlames(){
    gsap.set(".flames",{display:"block"});
    flamesTL.play()
}

// start flames for testing 
// controlFlames();