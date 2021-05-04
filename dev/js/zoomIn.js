import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#orange-mtn",{transformOrigin:"center"});
gsap.set("#red-mtn",{transformOrigin:"center"});
gsap.set(".front-mtns",{transformOrigin:"center"});
gsap.set(".trees",{transformOrigin:"center"});


zoomTL.from("#orange-mtn",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
            .from("#red-mtn",{duration:5.75, scale:10,ease: "power4.out",y:"+=800"},"zoom")
            .from(".front-mtns",{duration:5.5, scale:10,ease: "power4.out",y:"+=800"},"zoom")
            .from("#trees-5",{duration:5.5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#trees-4",{duration:5.25, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#trees-3",{duration:5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#trees-2",{duration:5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#trees-1",{duration:4.75, scale:10,ease: "power4.out",y:"+=420"},"zoom")