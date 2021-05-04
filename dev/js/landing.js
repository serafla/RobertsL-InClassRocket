import { gsap } from "gsap";
import {flamesTL} from "./liftOff"


export let landingTL = gsap.timeline();
landingTL.to("#space-ship",{duration:1, x:"-=100", y:"+=100", rotation:"-=20"},"flames")
            .to("#left-blue",{duration:1, scaleY:0, onStart:stopFlames},"flames")
            .to("#left-dark-blue",{duration:1, scaleY:0},"flames")
            .to("#right-blue",{duration:1, scaleY:0},"flames")
            .to("#right-dark-blue",{duration:1, scaleY:0},"flames")


function stopFlames(){
    console.log("stop");
    flamesTL.kill();
}