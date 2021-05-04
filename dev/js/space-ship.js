import { gsap } from "gsap";

export let spaceShipTL = gsap.timeline();

gsap.set(".flames",{display:"none"});
gsap.set("#window",{transformOrigin: "center"});
gsap.set(".engines",{transformOrigin: "center"});
gsap.set(".bones",{transformOrigin: "center top"});
gsap.set(".left-engines",{rotation:90});
gsap.set(".right-engines",{rotation:-90});


// spaceShipTL.from("#window",{rotation:360, duration:3,repeat:5})

spaceShipTL.from("#space-ship",{y:"+=500", duration:0.5})
            .from("#shadow",{alpha:0, duration:0.5})
            .from("#cone",{alpha:0, duration:0.5})
            .from("#window",{scale:0, duration:0.5})
            .from("#window-bg",{alpha:0, duration:0.5})
            .from("#window-glass",{alpha:0, duration:0.5})
            .from("#window-bars",{alpha:0, duration:0.5})

            .from("#eng-middle-left",{alpha:0, duration:0.25},"mid-eng-1")
            .from("#left-mid-bone",{scale:0, duration:0.25},"mid-eng-2")
            .to("#eng-middle-left",{rotation:0, duration:0.25},"mid-eng-3")
            .from("#eng-middle-right",{alpha:0, duration:0.25},"mid-eng-1")
            .from("#right-mid-bone",{scale:0, duration:0.25},"mid-eng-2")
            .to("#eng-middle-right",{rotation:0, duration:0.25},"mid-eng-3")

            .from("#eng-left",{alpha:0, duration:0.25},"eng-1")
            .from("#left-bone",{scale:0, duration:0.25},"eng-2")
            .to("#eng-left",{rotation:0, duration:0.25},"eng-3")
            .from("#eng-right",{alpha:0, duration:0.25},"eng-1")
            .from("#right-bone",{scale:0, duration:0.25},"eng-2")
            .to("#eng-right",{rotation:0, duration:0.25},"eng-3")
            .from("#eng-left-bottom",{y:"-=20", duration:0.5})
            .from("#eng-right-bottom",{y:"-=20", duration:0.5},"-=0.25")
            .to("#space-ship",{y:"+=320", duration:2, ease: "bounce.out"})