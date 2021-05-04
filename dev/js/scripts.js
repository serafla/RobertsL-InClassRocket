import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { spaceShipTL } from "./space-ship"
import { liftOffTL } from "./liftOff"
import { flightTL } from "./flightPath"
import { moonZoomInTL } from "./moonZoom"
import { landingTL } from "./landing"
import { endingTL } from "./ending"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline({paused:true});

mainTL.add(fadeInTL)
        .add(zoomTL)
        .add(spaceShipTL)
        
        .add(liftOffTL)
        .add(flightTL ,"zoomFlight")
        .add(moonZoomInTL,"zoomFlight")
        .addLabel("marker")
        .add(landingTL)
        .add(endingTL);
        

        mainTL.play("marker");
        // mainTL.play();

       

// console.log(numberThing);

// GSDevTools.create();


